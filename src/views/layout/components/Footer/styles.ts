import styled, { css, DefaultTheme } from 'styled-components'

export const LayoutStyled = styled('div')`
  ${({ backgroundColor }: { backgroundColor: string }) =>
    css`
      background-color: ${backgroundColor};
      width: 100%;
      min-width: 550px;
      bottom: 0;
    `}
`

export const ContentStyled = styled('div')`
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ListLinksStyled = styled('div')`
  ${({ theme, color }: { theme?: DefaultTheme; color?: string }) =>
    theme &&
    css`
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      margin: auto;

      #LinkSpn {
        color: ${theme.colors.text};

        ${color &&
        css`
          color: ${color};
        `}

        font-size: ${theme.DesignTokens.typography.font.size.small};

        :hover {
          cursor: pointer;
          font-weight: ${theme.DesignTokens.typography.font.weight.medium};
        }
      }
    `}
`

export const ImageLogo = styled('img')`
  ${({ maxHeight }: { maxHeight: string }) =>
    css`
      cursor: pointer;
      max-height: ${maxHeight};
    `}
`
