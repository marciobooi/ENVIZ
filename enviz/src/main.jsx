import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ecl/preset-ec/dist/styles/optional/ecl-reset.css';
import '@ecl/preset-ec/dist/styles/optional/ecl-ec-default.css';
import '@ecl/preset-ec/dist/styles/ecl-ec.css';
import '@ecl/preset-ec/dist/styles/optional/ecl-ec-utilities.css'; 






import './index.css'
import App from './App.jsx'
import './i18n'

import '@ecl/preset-ec/dist/scripts/ecl-ec.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
