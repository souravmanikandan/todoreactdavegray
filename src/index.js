import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App className="bg-white dark:bg-black" />
    </React.StrictMode>
  );
} else {
  console.error("Root container not found");
}
