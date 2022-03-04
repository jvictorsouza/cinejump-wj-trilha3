import React from 'react'
import { ButtonStyled } from './styles'

export interface RoundedButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  width?: string
  height?: string
  primaryColor?: string
  secondaryColor?: string
  hoverColor?: string
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>
  textButton: string
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  type = 'button',
  width = '360px',
  height = '72px',
  primaryColor,
  secondaryColor,
  hoverColor,
  onClickButton = () => {},
  textButton
}) => {
  return (
    <ButtonStyled
      type={type}
      width={width}
      height={height}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      hoverColor={hoverColor}
      onClick={onClickButton}
    >
      {textButton}
    </ButtonStyled>
  )
}
export default RoundedButton
