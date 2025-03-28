import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router';
import router from './router/Routes.jsx';
import {HelmetProvider} from 'react-helmet-async';
import UserContext from './contextApi/userContext.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
