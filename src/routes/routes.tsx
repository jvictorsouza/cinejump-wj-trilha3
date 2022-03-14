import React from 'react'
import { RouteObject } from 'react-router'

const Home = React.lazy(() => import('../views/home'))
const Layout = React.lazy(() => import('../views/layout'))
const User = React.lazy(() => import('../views/user'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '*',
    element: (() => (
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <span style={{ color: 'red', fontWeight: 'bold' }}>Rota não encontrada</span>
      </div>
    ))()
  }
]

export default routes
