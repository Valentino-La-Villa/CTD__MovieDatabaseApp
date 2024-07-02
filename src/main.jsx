import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviesApp } from './MoviesApp'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoviesApp />
  </React.StrictMode>
)
