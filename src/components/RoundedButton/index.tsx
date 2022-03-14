import CircularLoading from 'components/CircularLoading'
import React from 'react'
import { ButtonStyled } from './styles'
import DesignTokens from 'styles/DesignTokens'

export interface RoundedButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  width?: string
  height?: string
  primaryColor?: string
  secondaryColor?: string
  hoverColor?: string
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>
  textButton: string
  isLoading?: boolean
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  type = 'button',
  width = '360px',
  height = '72px',
  primaryColor,
  secondaryColor,
  hoverColor,
  onClickButton = () => {},
  textButton,
  isLoading = false
}) => {
  return (
    <ButtonStyled
      type={type}
      width={width}
      height={height}
      primarycolor={primaryColor}
      secondarycolor={secondaryColor}
      hovercolor={hoverColor}
      onClick={onClickButton}
      disabled={isLoading}
    >
      {isLoading ? (
        <CircularLoading
          color={(secondaryColor && secondaryColor) || DesignTokens.palette.secondary}
        />
      ) : (
        textButton
      )}
    </ButtonStyled>
  )
}
export default RoundedButton
