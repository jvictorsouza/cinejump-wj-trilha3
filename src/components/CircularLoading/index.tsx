import React from 'react'
import { BoxStyled, CircularLoadingStyled } from './styles'

interface Props {
  isRoute?: boolean
}
const CircularLoading: React.FC<Props> = ({ isRoute = false }) => (
  <>
    <BoxStyled isroute={isRoute ? 1 : 0}>
      <CircularLoadingStyled />
    </BoxStyled>
  </>
)

export default CircularLoading
