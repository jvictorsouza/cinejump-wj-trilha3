import { FlattenSimpleInterpolation } from 'styled-components'

export interface DSComponentsInterface {
  buttons?: {
    primaryButton?: FlattenSimpleInterpolation
  }
  texts?: {
    titleText?: FlattenSimpleInterpolation
    subtitleText?: FlattenSimpleInterpolation
    default01Text?: FlattenSimpleInterpolation
    default02Text?: FlattenSimpleInterpolation
  }
}

export interface DSComponentsThemeInterface {
  buttons: {
    primaryButton: FlattenSimpleInterpolation
  }
  texts: {
    titleText: FlattenSimpleInterpolation
    subtitleText: FlattenSimpleInterpolation
    default01Text: FlattenSimpleInterpolation
    default02Text: FlattenSimpleInterpolation
  }
}
