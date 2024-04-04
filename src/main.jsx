import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OnlineStatusProvider from './context/OnlineStatusContext.jsx'
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <OnlineStatusProvider>
    <App />
   </OnlineStatusProvider>
  </React.StrictMode>,
)
