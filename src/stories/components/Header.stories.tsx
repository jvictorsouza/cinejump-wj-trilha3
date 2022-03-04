import React from 'react'
import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from 'views/layout/components/Header'
import DesignTokens from 'styles/DesignTokens'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' }
  }
} as Meta

const Template: Story<HeaderProps> = (args: HeaderProps) => <Header {...args} />

export const header = Template.bind({})
header.args = {
  primaryColor: DesignTokens.palette.primary,
  secondaryColor: DesignTokens.palette.secondary,
  buttonsTitles: ['Tópico 1', 'Tópico 2']
}
header.storyName = 'header'
