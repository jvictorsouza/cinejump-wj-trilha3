import styled, { css, DefaultTheme } from 'styled-components'

export const ButtonStyled = styled('button')`
  ${({
    theme,
    width,
    height,
    primaryColor,
    secondaryColor,
    hoverColor
  }: {
    theme?: DefaultTheme
    width: string
    height: string
    primaryColor?: string
    secondaryColor?: string
    hoverColor?: string
  }) =>
    theme &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      ${theme.DesignTokens.DSComponents?.buttons?.primaryButton}

      width: ${width};
      min-width: 150px;

      height: ${height};
      min-height: 50px;

      ${primaryColor &&
      css`
        background-color: ${primaryColor};
      `}

      ${secondaryColor &&
      css`
        color: ${secondaryColor};
      `}

      ${hoverColor &&
      css`
        :hover {
          background-color: ${hoverColor};
        }
      `}
    `}
`
