import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext/AppContext';
import { GlobalStyle } from './ui/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyle/>
        <App />
      </AppContextProvider>
  </React.StrictMode>
);
