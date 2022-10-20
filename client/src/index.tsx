import { createRoot, Root } from 'react-dom/client';
import './styles.scss';
import React from 'react';
import App from './App';
const container = document.getElementById('root') as HTMLElement;

const root: Root = createRoot(container);
root.render(<App />);
