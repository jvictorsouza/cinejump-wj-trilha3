import useAuth from 'hooks/useAuth'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DesignTokens from '../../styles/DesignTokens'
import Footer from './components/Footer'
import Header from './components/Header'
import { Styles } from './styles'
import { useNavigate, useLocation } from 'react-router-dom'

const Layout: React.FC = () => {
  const { handleLogout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let tokenStorage = localStorage.getItem('token')
    let token = (tokenStorage && JSON.parse(tokenStorage)) || undefined
    if (!token && location.pathname !== '/user') navigate('/user')
    else if (location.pathname !== '/home') navigate('/home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logoutFunction = () => {
    handleLogout()
    navigate('/user')
  }

  return (
    <Styles>
      <Header
        primaryColor={DesignTokens.palette.primary}
        secondaryColor={DesignTokens.palette.secondary}
        buttonsTitles={['Filmes', 'Séries']}
        urlPathImageLogo="assets/images/Logo-white.svg"
        logoutFunction={logoutFunction}
      />
      <Outlet />
      <Footer
        primaryColor={DesignTokens.palette.primary}
        secondaryColor={DesignTokens.palette.secondary}
        linkTitles={[
          'Desenvolvido por João Chagas',
          'Proposta do projeto',
          'Protótipo no Figma',
          'Apresentação ao comitê',
          'Documentação'
        ]}
        linkPaths={[
          'https://www.linkedin.com/in/jvictorsouza/',
          'https://webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+2',
          'https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=7185%3A17',
          'https://docs.google.com/presentation/d/1iKBjjW9TpO_-vyyNWrqT4LzeDZLyTc7xiOxgFo0BONA/edit?usp=sharing',
          '_blank',
          'https://webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+1'
        ]}
        urlPathImageLogo="assets/images/Logo-white.svg"
      />
    </Styles>
  )
}

export default Layout
