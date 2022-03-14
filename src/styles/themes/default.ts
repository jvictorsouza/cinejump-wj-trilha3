import { DefaultTheme } from 'styled-components'
import DT from '../DesignTokens'

export default {
  title: 'default',
  // https://www.npmjs.com/package/styled-components-breakpoint
  breakpoints: {
    values: {
      xs: 0,
      xsm: 320,
      sm: 768,
      md: 1024,
      lg: 1440
    }
  },
  colors: {
    primary: '#e83f5b',
    secondary: '#ffffff',
    hoverMain: '#80bcb8',
    hoverPrimary: '#9c283c',
    hoverSecondary: '#efefef',
    text: '#ffffff',
    backgroundText: '#0000004d',
    backgroundComponent: '#7c7a7a'
  },
  DesignTokens: { ...DT }
} as DefaultTheme
