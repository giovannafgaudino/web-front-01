import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import Servicos from './Pages/Servicos.jsx'
import PageNotFOund from './Pages/PageNotFoud.jsx'
import MainConteudos from './Componentes/MainConteudos/MainConteudos.jsx'

const router = createBrowserRouter
([
  {
    path: '/',
    element: <App/>, 
    children:[
      {index:true, element: <MainConteudos/>},
      {path:'sobre', element: <Sobre/>},
      {path:'contato', element: <Contato/>},
      {path:'servicos', element: <Servicos/>}, 
      {path:'*', element: <PageNotFOund/>}
    ]
  }   
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
