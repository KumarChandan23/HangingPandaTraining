import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // or wherever your main component is
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ✅ Step 1: Create a QueryClient instance
const queryClient = new QueryClient();

// ✅ Step 2: Wrap your app with QueryClientProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
