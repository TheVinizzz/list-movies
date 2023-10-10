import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./hooks/useMovie"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient';

const store = configureStore({
  reducer: {
    movie: movieReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
