import React from 'react'
import ContextProviderComposer from '../src/providers/contextProviderComposer'
import Providers from '../src/providers'
import { GlobalStyles } from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story: any) => (
    <>
      <ContextProviderComposer contextProviders={Providers}>
        <GlobalStyles />
        {Story()}
      </ContextProviderComposer>
    </>
  )
]
