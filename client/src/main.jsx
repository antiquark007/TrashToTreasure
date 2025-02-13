import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './components/ContextProvider/Context.jsx'
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </StrictMode>
)
