import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BreedProvider } from './context/BreedContext';
import { FavouritesProvider } from './context/FavouritesContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BreedProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </BreedProvider>
  </React.StrictMode>
);
