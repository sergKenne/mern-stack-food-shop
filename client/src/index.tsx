import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/slick-carousel/slick/slick.css";
// import '../node_modules/slick-carousel/slick/slick-theme.css';
import './styles/styles.scss';
import React from 'react';
import App from './App';
const container = document.getElementById('root') as HTMLElement;

const root: Root = createRoot(container);
root.render(<BrowserRouter>
    <App />
</BrowserRouter>
);
