import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Booking from './components/bookings/Booking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Booking/> */}
  </StrictMode>,
)
