import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router';
import router from './router/Routes.jsx';
import {HelmetProvider} from 'react-helmet-async';
import UserContext from './contextApi/userContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </HelmetProvider>
  </StrictMode>
);
