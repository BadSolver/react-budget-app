import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< Updated upstream
import reportWebVitals from './reportWebVitals';
=======
import { ExpensesProvider } from './context';
import { GlobalStyle } from './ui/GlobalStyles';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< Updated upstream
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
  <ExpensesProvider>
    <React.StrictMode>
      <GlobalStyle/>
        <App />
    </React.StrictMode>
  </ExpensesProvider>
>>>>>>> Stashed changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
