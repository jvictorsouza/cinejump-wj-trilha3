import styled, { css, DefaultTheme } from 'styled-components'

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 30px;
  width: 100%;
  min-height: calc(100vh - 195px);
`

export const ContentStyled = styled.div`
  width: 100%;
  #pre-layout-home-row {
    :hover {
      background-color: ${({ theme }) => theme.colors.hoverMain};
      div {
        background-color: ${({ theme }) => theme.colors.hoverMain};
        span {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`

export const LayoutRowStyled = styled.div`
  width: 100%;
`

export const ContentRowStyled = styled.div`
  ${({ theme }: { theme?: DefaultTheme }) =>
    theme &&
    css`
      max-width: 1000px;
      background-color: ${theme.colors.secondary};
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      column-gap: 15px;
      overflow: hidden;
      padding: 15px 0;

      span {
        width: 100%;
        ${theme.DesignTokens.DSComponents?.texts?.default01Text}
        color: ${theme.colors.primary};
        margin: 0 5px;
      }
      div {
        display: flex;
        flex-direction: row;
        column-gap: 15px;
        overflow-x: auto;
        margin: 5px;

        ::-webkit-scrollbar {
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme.colors.secondary};
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.primary};
          border-radius: 5px;
        }
      }

      :hover {
        background-color: ${theme.colors.hoverMain};
        span {
          color: ${theme.colors.text};
        }
      }
    `}
`

export const ImageCardStyled = styled.div`
  ${({ urlImage }: { urlImage: string }) =>
    css`
      min-height: 278px;
      min-width: 185px;
      width: auto;
      border-radius: 10px;
      margin-bottom: 15px;
      background-image: url(${urlImage});
    `}
`

export const TrailerCardStyled = styled.div`
  ${({ urlImage }: { urlImage: string }) =>
    css`
      min-height: 225px;
      min-width: 400px;
      border-radius: 10px;
      margin: 0;
      margin-bottom: 15px;
      justify-content: center;
      background-image: url(${urlImage});
    `}
`

export const HeartFavoritesStyled = styled.img`
  cursor: pointer;
  height: fit-content;
  margin: auto;
  margin-top: 5px;
  margin-right: 5px;
`

export const PlayVideoStyled = styled.img`
  cursor: pointer;
  height: fit-content;
  margin: auto;
`

export const RowStyled = styled.div`
  div {
    background-color: ${({ theme }) => theme.colors.hoverMain};
    color: ${({ theme }) => theme.colors.text};
    span {
      color: ${({ theme }) => theme.colors.text};
    }
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.hoverMain};
    color: ${({ theme }) => theme.colors.text};
  }
`

export const LayoutHighlightsStyled = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentHighlightsStyled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5px;
`

export const SecondaryHighlightStyled = styled.div`
  width: 29%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  img {
    border-radius: 10px 10px 0px 0px;
    position: relative;
    top: 102px;
    max-width: 100%;
  }

  #secondary-highlights-banners-info {
    span {
      display: flex;
      align-items: flex-end;
      position: relative;
      top: 102px;
      max-width: 100%;
      height: 28px;
      background-color: ${({ theme }) => theme.colors.backgroundText};
      border: 5px 5px 0 5px solid ${({ theme }) => theme.colors.backgroundText};
      padding: 5px 5px 0 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 19px;
      font-weight: 400;
      line-height: 24px;
      margin-top: 10px 15px 0px 15px;
      border-radius: 0px 0px 10px 10px;
      z-index: 1;
    }
  }
`

export const MainHighlightStyled = styled.div`
  width: 69%;
  height: 100%;

  img {
    border-radius: 10px;
    position: relative;
    top: 102px;
    max-width: 100%;
  }

  #main-highlights-banner-info {
    width: 100%;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    span {
      background-color: ${({ theme }) => theme.colors.backgroundText};
      padding: 5px 5px 0px 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      height: 20px;
      max-width: 100%;
      z-index: 2;
    }
    label {
      position: relative;
      background-color: ${({ theme }) => theme.colors.backgroundText};
      border-radius: 0px 0px 10px 10px;
      padding: 5px 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      height: 82px;
      max-width: 100%;
      z-index: 1;
    }
  }
`
