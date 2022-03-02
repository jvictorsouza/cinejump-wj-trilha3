import { DesignTokensInterface } from '../interfaces'
import { default01Text } from './Texts'
import { css } from 'styled-components'

const primaryButton = (DesignTokens: DesignTokensInterface) => css`
  /* Text */
  color: ${DesignTokens.palette.secondary};
  text-transform: uppercase;
  text-align: center;

  /* Shape */
  background-color: ${DesignTokens.palette.primary};
  border: 3px solid ${DesignTokens.palette.secondary};
  border-radius: 45px;
  margin: 0 auto;
  ${default01Text(DesignTokens)};

  :hover {
    cursor: pointer;
    background-color: ${DesignTokens.palette.hoverPrimary};
  }
`

export { primaryButton }
