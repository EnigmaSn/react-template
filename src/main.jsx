import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/views//styles/index.css';
import App from './views/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);