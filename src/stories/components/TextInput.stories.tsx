import React from 'react'
import { Meta, Story } from '@storybook/react'
import TextInput, { TextInputProps } from '../../components/TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<TextInputProps> = (args: TextInputProps) => <TextInput {...args} />

export const textFieldInput = Template.bind({})
textFieldInput.args = {
  height: 72,
  width: 530,
  InputProps: {
    placeholder: 'Placeholder',
    autoFocus: false,
    inputProps: { maxLength: 100 }
  },
  error: ''
}
textFieldInput.storyName = 'text-field-input'

export const errorTextFieldInput = Template.bind({})
errorTextFieldInput.args = {
  height: 72,
  width: 530,
  InputProps: {
    placeholder: 'Placeholder',
    autoFocus: false,
    inputProps: { maxLength: 100 }
  },
  error: 'Error message for text-field-input-error'
}
errorTextFieldInput.storyName = 'error-text-field-input'

export const nameFieldInput = Template.bind({})
nameFieldInput.args = {
  name: 'name',
  height: 72,
  width: 530,
  addorment: true,
  InputProps: {
    placeholder: 'Name',
    autoFocus: false,
    inputProps: { maxLength: 100 }
  },
  error: ''
}
nameFieldInput.storyName = 'name-field-input'

export const emailFieldInput = Template.bind({})
emailFieldInput.args = {
  name: 'email',
  height: 72,
  width: 530,
  addorment: true,
  InputProps: {
    placeholder: 'E-mail',
    autoFocus: false,
    inputProps: { maxLength: 100 }
  },
  error: ''
}
emailFieldInput.storyName = 'email-field-input'

export const passwordFieldInput = Template.bind({})
passwordFieldInput.args = {
  name: 'password',
  height: 72,
  width: 530,
  addorment: true,
  InputProps: {
    placeholder: 'Password',
    autoFocus: false,
    type: 'password',
    inputProps: { maxLength: 100 }
  },
  error: ''
}
passwordFieldInput.storyName = 'password-field-input'
