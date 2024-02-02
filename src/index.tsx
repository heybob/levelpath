import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { WikiDataProvider } from './contexts/WikiDataProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <WikiDataProvider>
      <App />
    </WikiDataProvider>
  //</React.StrictMode>
);
