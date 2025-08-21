import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import detectTouchDevice from './utils/detectTouch';
import store from '@/redux/store';
import App from './App.tsx';
import './index.sass';

// подписка на загрузку DOM и установка класса ДО рендера:
document.addEventListener('DOMContentLoaded', () => {
  detectTouchDevice();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
});
