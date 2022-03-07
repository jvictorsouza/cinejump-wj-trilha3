import React from 'react'
import { Meta, Story } from '@storybook/react'
import RoundedButton, { RoundedButtonProps } from 'components/RoundedButton'
import DesignTokens from 'styles/DesignTokens'

export default {
  title: 'Components/RoundedButton',
  component: RoundedButton,
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
    hoverColor: { control: 'color' }
  }
} as Meta

const Template: Story<RoundedButtonProps> = (args: RoundedButtonProps) => (
  <RoundedButton {...args} />
)

export const roudedButton = Template.bind({})
roudedButton.args = {
  primaryColor: DesignTokens.palette.primary,
  secondaryColor: DesignTokens.palette.secondary,
  hoverColor: DesignTokens.palette.hoverMain,
  width: '360px',
  height: '72px',
  textButton: 'Clique aqui'
}
roudedButton.storyName = 'rounded-button'
