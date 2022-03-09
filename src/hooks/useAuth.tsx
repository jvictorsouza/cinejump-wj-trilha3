import React, { useEffect, useState, useContext } from 'react'

export interface TokenInterface {
  token?: string
  authenticated?: boolean | undefined
}
export interface UseAuthInterface {
  token: TokenInterface
  setToken: Function
  handleLogout: Function
}

export const AuthContext = React.createContext<UseAuthInterface>({} as UseAuthInterface)

export const asyncLocalStorage = {
  setItem: async (key: string, value: string) => {
    await null
    return localStorage.setItem(key, value)
  },
  getItem: async (key: string) => {
    await null
    return localStorage.getItem(key)
  },
  removeItem: async (key: string) => {
    await null
    return localStorage.removeItem(key)
  }
}

export const AuthProvider: React.FC = (props) => {
  const [token, setToken] = useState<TokenInterface>({
    authenticated: undefined
  })

  useEffect(() => {
    let cancel = false

    let userStorage = asyncLocalStorage.getItem('token')
    userStorage.then((value: any) => {
      if (cancel) return
      token &&
        setToken({ ...JSON.parse(value), authenticated: value && value.length > 1 })
    })
    return () => {
      cancel = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    asyncLocalStorage.removeItem('token').then(() => {
      setToken({})
      localStorage.clear()
    })
  }

  return (
    <AuthContext.Provider value={{ token, setToken, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export default useAuth
