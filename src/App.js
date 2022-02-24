import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '@/router'
import store from '@/store'
import LYFAppHeader from 'components/app-header'

function RenderRoutes() {
  const element = useRoutes(routes)
  return element
}
export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LYFAppHeader />
        <React.Suspense fallback={<h2>Loading……</h2>}>
          <RenderRoutes />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  );
})

