import App from './App'
import { createRoot } from 'react-dom/client'
import './css/styles.css'

const element = document.getElementById('root')
const root = createRoot(element)
root.render(<App />)
