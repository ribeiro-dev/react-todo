import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material';

import Router from "./Router";
import ThemeContext from "./context/ThemeContext";

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });


export default function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  function toggleTheme() {

    setTheme(currentTheme => {
      const newTheme = currentTheme == 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <Router />
      </ThemeProvider>

    </ThemeContext.Provider>
  )
}