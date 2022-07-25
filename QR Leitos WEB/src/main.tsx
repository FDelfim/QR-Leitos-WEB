import React from 'react'
import ReactDOM from 'react-dom/client'

import Inicio from './pages/Inicio'
import Leitos from './pages/Leitos'

import App from './App'
import Login from './Login'
import Menu from './menu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Leitos />
  </React.StrictMode>
)
