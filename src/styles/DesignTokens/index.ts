import { primaryButton } from './components/Buttons'
import { titleText, subtitleText, default01Text, default02Text } from './components/Texts'
import { palette, typography } from './values'
import { DesignTokensInterface } from './interfaces'

let DesignTokens: DesignTokensInterface = {
  palette,
  typography
}

DesignTokens = {
  ...DesignTokens,
  DSComponents: {
    buttons: {
      primaryButton: primaryButton(DesignTokens)
    },
    texts: {
      titleText: titleText(DesignTokens),
      subtitleText: subtitleText(DesignTokens),
      default01Text: default01Text(DesignTokens),
      default02Text: default02Text(DesignTokens)
    }
  }
}

export default DesignTokens
