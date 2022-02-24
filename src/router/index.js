import * as React from 'react'
import { Navigate } from 'react-router-dom'

const Discover = React.lazy(() => import('@/pages/discover'))
const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes