import { Assets } from 'helpers/assets'
import React from 'react'
import { ContentStyled, LayoutStyled, ListLinksStyled, ImageLogo } from './styles'

export interface FooterProps {
  primaryColor: string
  secondaryColor?: string
  linkTitles: Array<string>
  linkPaths: Array<string>
  isOnAssets?: boolean
  urlPathImageLogo?: string
}

const Footer: React.FC<FooterProps> = ({
  primaryColor,
  secondaryColor = undefined,
  linkTitles,
  linkPaths,
  isOnAssets = true,
  urlPathImageLogo
}) => {
  return (
    <LayoutStyled backgroundColor={primaryColor}>
      <ContentStyled>
        {(urlPathImageLogo && (
          <ImageLogo
            src={isOnAssets ? Assets(urlPathImageLogo) : urlPathImageLogo}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            maxHeight={'200px'}
          />
        )) || <span style={{ color: secondaryColor, margin: 'auto' }}>LOGO IMAGE</span>}
        <ListLinksStyled color={secondaryColor}>
          {linkTitles.map((title: string, index: number) => {
            return (
              <span
                key={`link-footer-${index}`}
                id="LinkSpn"
                onClick={() => window.open(linkPaths[index], '_blank')}
              >
                {title}
              </span>
            )
          })}
        </ListLinksStyled>
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Footer
