import styled, { css, DefaultTheme } from 'styled-components'
import { Box, Theme, CircularProgress } from '@mui/material'

export const BoxStyled = styled(Box)`
  ${({ theme, isroute }: { theme?: Theme; isroute: number }) =>
    theme &&
    css`
      display: flex;
      min-height: ${isroute ? '100vh' : '100%'};
      min-width: ${isroute ? '100vw' : '100%'};
    `}
`
export const CircularLoadingStyled = styled(CircularProgress)`
  ${({ theme }: { theme?: DefaultTheme }) =>
    theme &&
    css`
      margin: auto;
      svg {
        color: ${theme.colors.primary};
      }
    `}
`
