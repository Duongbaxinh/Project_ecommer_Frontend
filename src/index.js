import { ChakraProvider } from '@chakra-ui/react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { themeCustom } from './theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={themeCustom}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>


);

reportWebVitals();
