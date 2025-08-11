import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Provider from './pages/Provider.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'
import Landing from './pages/Landing.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'explore', element: <Explore /> },
      { path: 'service/:id', element: <ServiceDetail /> },
      { path: 'provider', element: <Provider /> },
      { path: 'success', element: <Success /> },
      { path: 'cancel', element: <Cancel /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
