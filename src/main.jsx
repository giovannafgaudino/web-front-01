import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import App from './App.jsx'
import Contato from './pages/Contato'
import Portal from './pages/PortalPaciente.jsx'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
// import Apoio from './pages/ApoioPsicologico'

//import './index.css'
import './style/style.css'




const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    
    {
      path: 'Contato',
      element: <Contato/>,
    },
    {
      path: 'Portal',
      element: <Portal/>,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
