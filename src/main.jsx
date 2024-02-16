import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainPage } from './pages/Main/MainPage.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout.jsx'


const router = createBrowserRouter([
  {
    element: <BaseLayout/>,
    children: [
      {
        path: '/',
        element: <MainPage/>
      }
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)