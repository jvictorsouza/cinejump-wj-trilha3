import React from 'react'
import { InputProps as MUIInputProps, InputAdornment } from '@mui/material'
import { TextFieldStyled, FormControlStyled } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import DesignTokens from 'styles/DesignTokens'

export interface TextInputProps {
  name?: string
  id?: string
  value: string | number
  type?: 'text' | 'number' | 'password' | 'email'
  InputProps?: MUIInputProps
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  addorment?: boolean
  error?: string | null
  width?: number
  height?: number
  primaryColor?: string
  textColor?: string
  backgroundColor?: string
}

const Input: React.FC<TextInputProps> = ({
  name = undefined,
  id,
  value,
  type = 'text',
  InputProps,
  onBlur = () => {},
  onClick = () => {},
  onChange,
  addorment = false,
  error = null,
  width,
  height = 41,
  primaryColor = undefined,
  textColor = undefined,
  backgroundColor = undefined
}) => {
  const hasError = () => {
    return error !== '' && error !== null
  }

  const hasAddorment = () => {
    return addorment || hasError()
  }

  const renderIcon = () => {
    let fillColor = (textColor && textColor) || DesignTokens.palette.backgroundComponent
    return hasAddorment() ? (
      <InputAdornment position="start">
        {name === 'name' ? (
          <FiUser color={fillColor} opacity={0.45} />
        ) : name === 'email' ? (
          <FiMail color={fillColor} opacity={0.45} />
        ) : name === 'password' ? (
          <FiLock color={fillColor} opacity={0.45} />
        ) : null}
      </InputAdornment>
    ) : null
  }

  return (
    <>
      <FormControlStyled fullWidth>
        <TextFieldStyled
          primarycolor={primaryColor}
          textcolor={textColor}
          backgroundcolor={backgroundColor}
          error={hasError()}
          variant="outlined"
          name={name}
          height={height}
          width={width}
          onBlur={onBlur}
          onClick={onClick}
          id={id ? id : name}
          value={value}
          type={type}
          onChange={onChange}
          addorment={hasAddorment() ? 1 : undefined}
          InputLabelProps={{ shrink: false }}
          InputProps={{
            ...InputProps,
            ...{
              startAdornment:
                InputProps?.startAdornment === undefined
                  ? renderIcon()
                  : InputProps?.startAdornment
            }
          }}
          {...(error && { error: true, helperText: error })}
        />
      </FormControlStyled>
    </>
  )
}

export default Input
