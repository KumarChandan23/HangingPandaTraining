import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './components/Routes.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={myRouter}>
      <App />
      </RouterProvider>
    </ QueryClientProvider>
  </StrictMode>,
)
