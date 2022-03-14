import styled, { css, DefaultTheme } from 'styled-components'

export const LayoutStyled = styled('div')`
  ${({ backgroundColor }: { backgroundColor: string }) =>
    css`
      background-color: ${backgroundColor};
      width: 100%;
      min-width: 550px;
      position: fixed;
      top: 0;
      z-index: 3;
    `}
`

export const ContentStyled = styled('div')`
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BttnsCampStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  margin: auto 0;

  #SVGBttn {
    cursor: pointer;
    :hover {
    }
  }
`

export const BtnSpanStyled = styled('span')`
  ${({ theme, color }: { theme?: DefaultTheme; color: string }) =>
    theme &&
    css`
      font-size: ${theme.DesignTokens.typography.font.size.x.small};
      color: ${color};

      :hover {
        cursor: pointer;
        font-weight: ${theme.DesignTokens.typography.font.weight.medium};
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
