import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from "./Redux/store.js";
import { Provider } from 'react-redux';
import 'react-alice-carousel/lib/alice-carousel.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <App />
    </Provider>
  </React.StrictMode>
);
