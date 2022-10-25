import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.module.scss'

document.documentElement.style.fontSize = 100 / 750 + 'vw'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
