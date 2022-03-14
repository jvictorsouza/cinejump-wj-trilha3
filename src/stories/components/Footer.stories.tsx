import React from 'react'
import { Meta, Story } from '@storybook/react'
import Footer, { FooterProps } from 'views/layout/components/Footer'
import DesignTokens from 'styles/DesignTokens'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' }
  }
} as Meta

const Template: Story<FooterProps> = (args: FooterProps) => <Footer {...args} />

export const footer = Template.bind({})
footer.args = {
  primaryColor: DesignTokens.palette.primary,
  secondaryColor: DesignTokens.palette.secondary,
  linkTitles: ['Tópico 1', 'Tópico 2', 'Tópico 3', 'Tópico 4', 'Tópico 5', 'Tópico 6'],
  linkPaths: ['_blank', '_blank', '_blank', '_blank', '_blank', '_blank']
}
footer.storyName = 'footer'
