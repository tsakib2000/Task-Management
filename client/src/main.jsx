import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './Provider/AuthProvider.jsx'
import Root from './Layout/Root.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router}>
   <Root/>
   </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
