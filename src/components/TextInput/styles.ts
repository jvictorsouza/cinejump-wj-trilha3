import { FormControl, TextField } from '@mui/material'
import styled, { css } from 'styled-components'

export const TextFieldStyled = styled(TextField)`
  ${({
    addorment,
    height,
    width
  }: {
    addorment: number | undefined
    height: number
    width: number | undefined
  }) =>
    css`
      .MuiInputLabel-root {
        display: none;
      }

      .MuiOutlinedInput-root {
        height: ${height}px;

        ${width &&
        css`
          width: ${width}px;
        `}

        font-size: 24px;
        color: ${({ theme }) => theme.colors.backgroundComponent};
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.hoverSecondary};
        border-radius: 10px;
      }

      .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
          outline: ${({ theme }) => theme.colors.primary};
          border: 2px solid ${({ theme }) => theme.colors.primary};
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
