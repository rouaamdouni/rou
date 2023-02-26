import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
)
