import React from 'react';
import './index.css';
import App from './App';
import { store  } from './redux';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
 );
