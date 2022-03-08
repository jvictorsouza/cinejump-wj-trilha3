import 'bootstrap/dist/css/bootstrap.min.css'
import 'mobx-react-lite/batchingForReactDom'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import StyledToast from './components/ToastNotification'
import Providers from './providers'
import ContextProviderComposer from './providers/contextProviderComposer'
import Router from './routes'
import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from './styles/global'
import { api as CinejumpAPI } from 'apis/cinejump'
import { RenderAToast } from 'helpers/toast'

const App: React.FC = () => {
  const [errorInterceptor, setErrorInterceptor] = useState<number | undefined>(undefined)

  const addErrorInterceptor = () => {
    const errorInterceptor = CinejumpAPI.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        let { data, status } = error.response
        let message = data.message || data.error
        RenderAToast('error', message)
        if (status === 401 && window.location.pathname !== '/user') {
          window.location.replace('/user')
          localStorage.clear()
        }
        return Promise.reject(error)
      }
    )
    setErrorInterceptor(errorInterceptor)
  }

  const removeErrorInterceptor = () => {
    CinejumpAPI.interceptors.request.eject(errorInterceptor || 0)
    setErrorInterceptor(undefined)
  }

  useEffect(() => {
    addErrorInterceptor()
    return () => {
      removeErrorInterceptor()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContextProviderComposer contextProviders={Providers}>
      <GlobalStyles />
      <StyledToast />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ContextProviderComposer>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
