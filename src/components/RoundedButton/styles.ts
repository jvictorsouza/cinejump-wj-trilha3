import styled, { css, DefaultTheme } from 'styled-components'

export const ButtonStyled = styled('button')`
  ${({
    theme,
    width,
    height,
    primarycolor,
    secondarycolor,
    hovercolor
  }: {
    theme?: DefaultTheme
    width: string
    height: string
    primarycolor?: string
    secondarycolor?: string
    hovercolor?: string
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

      ${primarycolor &&
      css`
        background-color: ${primarycolor};
      `}

      ${secondarycolor &&
      css`
        color: ${secondarycolor};
      `}

      ${hovercolor &&
      css`
        :hover {
          background-color: ${hovercolor};
        }
      `}
    `}
`
