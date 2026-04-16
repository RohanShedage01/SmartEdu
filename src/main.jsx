import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <App />
)
