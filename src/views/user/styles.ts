import styled, { css, DefaultTheme } from 'styled-components'

export const RowDivStyled = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 1200px;
`

export const ImageLogo = styled('img')`
  margin: 0 auto;
`

export const BaseStyled = styled('div')`
  ${({ justifyContent }: { justifyContent: 'space-around' | 'space-evenly' }) =>
    css`
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: ${justifyContent};
      width: 100%;
      height: 100%;
    `};
`

export const CenterVerticalContentStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 64px;
  align-items: center;
  text-align: center;
  margin: 0 40px;
`

export const TitleStyled = styled('div')`
  ${({
    theme,
    color,
    fontWeight
  }: {
    theme?: DefaultTheme
    color: string
    fontWeight: number
  }) =>
    theme &&
    css`
      ${theme.DesignTokens.DSComponents?.texts?.titleText}
      color: ${color};
      font-weight: ${fontWeight};
    `};
`

export const SubTitleStyled = styled('div')`
  ${({ theme }: { theme?: DefaultTheme }) =>
    theme &&
    css`
      ${theme.DesignTokens.DSComponents?.texts?.subtitleText}
      color: ${theme.colors.text};
    `}
`

export const BottomButtonStyled = styled('button')`
  ${({ theme }: { theme?: DefaultTheme }) =>
    theme &&
    css`
      ${theme.DesignTokens.DSComponents?.buttons?.primaryButton}
      width: 360px;
      height: 72px;
    `}
`
