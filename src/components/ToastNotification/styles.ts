import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import toastConfig from '../../configs/toastConfig'

export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig
})`
  .Toastify__toast--error {
    font-family: 'Ubuntu', sans-serif;
    background: #ab4b4b;
    color: #ffffff;
    font-size: 15px;
    justify-self: center;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #f37370;
    }
  }

  .Toastify__toast--success {
    font-family: 'Ubuntu', sans-serif;
    background: #4d9144;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #7bf370;
    }
  }

  .Toastify__toast--warning {
    font-family: 'Ubuntu', sans-serif;
    background: #aba94b;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #f3ef70;
    }
  }
`
