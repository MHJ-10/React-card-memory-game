import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import '../public/css/index.css'
import "../public/css/responsive.css"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
