import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MovieDataProvider } from './context/MovieDataContext';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieDataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MovieDataProvider>
  </React.StrictMode>
);

reportWebVitals();
