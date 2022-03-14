import 'styled-components'
import { DesignTokensInterface } from './DesignTokens/interfaces'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    breakpoints: {
      values: {
        xs: number
        xsm: number
        sm: number
        md: number
        lg: number
      }
    }
    colors: {
      primary: string
      secondary: string
      hoverMain: string
      hoverPrimary: string
      hoverSecondary: string
      text: string
      backgroundText: string
      backgroundComponent: string
    }
    DesignTokens: DesignTokensInterface
  }
}
