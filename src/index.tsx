import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BasketBookContextProvider } from './components/Projects/BookStore/components/BasketBookContext/BasketBookContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/Projects/BookStore/i18';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <I18nextProvider i18n={ i18n }>
    <BasketBookContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BasketBookContextProvider>
    </I18nextProvider>
  </React.StrictMode>
  
);


