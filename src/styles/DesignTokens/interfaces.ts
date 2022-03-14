import {
  DSComponentsInterface,
  DSComponentsThemeInterface
} from './components/interfaces'
import { PaletteInterface } from './values/palette'
import { TypographyInterface } from './values/typography'

export interface DesignTokensInterface {
  palette: PaletteInterface
  typography: TypographyInterface
  DSComponents?: DSComponentsInterface
}

export interface DesignTokensThemeInterface extends DesignTokensInterface {
  DSComponents: DSComponentsThemeInterface
}
