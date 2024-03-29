import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/index';

// Judit Mendoza Santana
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8e44ad', 
    },
    secondary: {
      main: '#9b59b6', 
    },
    background: {
      default: '#d2b4de', 
      paper: '#e8daef', 
    },
    error: {
      main: '#ff0000', 
    },
  },
  typography: {
    fontFamily: 'Oswald',
    fontSize: 18,
    htmlFontSize: 20,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
