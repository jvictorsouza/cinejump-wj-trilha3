import { AuthProvider } from 'hooks/useAuth'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../styles/themes/default'

const Providers = [<ThemeProvider theme={defaultTheme} />, <AuthProvider />]

export default Providers
