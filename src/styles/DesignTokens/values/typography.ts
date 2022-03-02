export interface TypographyInterface {
  font: {
    primary: string
    secondary: string
    size: {
      big: string
      medium: string
      small: string
      x: {
        big: string
        medium: string
        small: string
      }
    }
    weight: {
      regular: number
      medium: number
      bold: number
    }
    align: {
      left: string
      center: string
      right: string
    }
  }
  text: {
    decoration: {
      uppercase: string
      underline: string
      linethrough: string
    }
  }
  lineHeight: string
}

export const typography: TypographyInterface = {
  font: {
    primary: 'Ubuntu',
    secondary: 'sans-serif',
    size: {
      big: '64px',
      medium: '24px',
      small: '16px',
      x: {
        big: '36px',
        medium: '30px',
        small: '14px'
      }
    },
    weight: {
      regular: 300,
      medium: 400,
      bold: 600
    },
    align: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  text: {
    decoration: {
      uppercase: 'uppercase',
      underline: 'underline',
      linethrough: 'line-through'
    }
  },
  lineHeight: 'normal'
}
