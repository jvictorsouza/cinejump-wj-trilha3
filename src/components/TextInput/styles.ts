import { FormControl, TextField } from '@mui/material'
import styled, { css, DefaultTheme } from 'styled-components'

export const TextFieldStyled = styled(TextField)`
  ${({
    theme,
    addorment,
    height,
    width,
    primaryColor,
    textColor,
    backgroundColor
  }: {
    theme: DefaultTheme
    addorment: number | undefined
    height: number
    width: number | undefined
    primaryColor: string | undefined
    textColor: string | undefined
    backgroundColor: string | undefined
  }) =>
    theme &&
    css`
      .MuiInputLabel-root {
        display: none;
      }

      .MuiOutlinedInput-root {
        min-height: 35px;
        height: ${height}px;

        min-width: 100px;
        ${width &&
        css`
          width: ${width}px;
        `}

        ${theme.DesignTokens.DSComponents?.texts?.default02Text}
        color: ${({ theme }) => theme.colors.backgroundComponent};
        ${textColor &&
        css`
          color: ${textColor};
        `}
        background-color: ${({ theme }) => theme.colors.hoverSecondary};
        ${backgroundColor &&
        css`
          background-color: ${backgroundColor};
        `}

        border-radius: 10px;
      }

      .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
          outline: ${({ theme }) => theme.colors.primary};
          border: 2px solid ${({ theme }) => theme.colors.primary};
          ${primaryColor &&
          css`
            outline: ${primaryColor};
            border: 2px solid ${primaryColor};
          `}
          border-radius: 10px;
        }
      }

      .MuiInputBase-input {
        height: fit-content;

        ${addorment &&
        css`
          padding-right: 0;
        `}
      }

      fieldset {
        font-size: 0;
        border: 5px grey;
        margin-top: 5px;

        legend {
          display: none;
        }
      }

      label[data-shrink='false'] + .MuiInputBase-formControl input.MuiInputBase-input {
        ::placeholder {
          opacity: 1 !important;
          color: red;
          font-size: 15px;
        }
      }
    `}
`

export const FormControlStyled = styled(FormControl)`
  ${({ width }: { width?: number }) =>
    css`
      ${width &&
      css`
        width: ${width}px;
      `}
    `}
`
