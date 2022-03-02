// import { css } from '@mui/styled-engine'
import { DesignTokensInterface } from '../interfaces'
import { css } from 'styled-components'

const titleText = (DesignTokens: DesignTokensInterface) => css`
  font-size: ${DesignTokens.typography.font.size.big};
  font-weight: ${DesignTokens.typography.font.weight.bold};
`

const subtitleText = (DesignTokens: DesignTokensInterface) => css`
  font-size: ${DesignTokens.typography.font.size.x.medium};
  font-weight: ${DesignTokens.typography.font.weight.regular};
`

const default01Text = (DesignTokens: DesignTokensInterface) => css`
  font-size: ${DesignTokens.typography.font.size.medium};
  font-weight: ${DesignTokens.typography.font.weight.regular};
`

const default02Text = (DesignTokens: DesignTokensInterface) => css`
  font-size: ${DesignTokens.typography.font.size.medium};
  font-weight: ${DesignTokens.typography.font.weight.medium};
`

export { titleText, subtitleText, default01Text, default02Text }
