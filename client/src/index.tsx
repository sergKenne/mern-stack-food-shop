import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/slick-carousel/slick/slick.css';
import './styles/styles.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const container = document.getElementById('root') as HTMLElement;

const root: Root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
