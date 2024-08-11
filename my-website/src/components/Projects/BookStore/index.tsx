import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18';
import { BasketBookContextProvider } from './components/BasketBookContext/BasketBookContext';
import App from './BookStore';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={ i18n }>
      <BasketBookContextProvider>
        <App />
      </BasketBookContextProvider>
        </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

