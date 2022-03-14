import { TokenInterface } from 'hooks/useAuth'

export const getToken = (): string | undefined => {
  let tokenStorage = localStorage.getItem('token')
  let dataToken: TokenInterface = (tokenStorage && JSON.parse(tokenStorage)) || {}
  return dataToken.token
}
