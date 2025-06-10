import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// подключение шрифта Inter (npm-пакет => подключение через JS):
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import App from './App.tsx';
import './index.sass';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
