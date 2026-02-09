import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import ServerContextProvider from './Context/ServerContextProvider.jsx'
import Home from './Components/Home.jsx'
import Sensitive from './Components/Sensitive.jsx'
import Budget from './Components/Budget.jsx'


let router = createBrowserRouter([
  {
      path: "/",
      element:
      <ServerContextProvider>
        <App/>
      </ServerContextProvider>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/sensitive",
          element: <Sensitive/>
        },
        {
          path: "/budget",
          element: <Budget/>
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
