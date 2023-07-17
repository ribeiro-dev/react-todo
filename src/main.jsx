import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createTheme, ThemeProvider } from '@mui/material';

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

const theme = 'dark';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
