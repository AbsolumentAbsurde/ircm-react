import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThankYou from "./thankyou.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/thankyou" element={ <ThankYou /> } />
      </Routes>
    </Router>
  </StrictMode>,
)
