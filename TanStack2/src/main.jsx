import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
