import React from 'react'
import { BoxStyled, CircularLoadingStyled } from './styles'

interface Props {
  isRoute?: boolean
  color?: string
}
const CircularLoading: React.FC<Props> = ({ isRoute = false, color }) => (
  <>
    <BoxStyled isroute={isRoute ? 1 : 0}>
      <CircularLoadingStyled loadingcolor={color} />
    </BoxStyled>
  </>
)

export default CircularLoading
