import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, colors, GlobalStyles } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  // add styling for box proly???
  // styles needed: Link, 
  palette: {
    primary: {
      main: colors.teal[500],
      light: colors.teal[300],
      dark: colors.teal[700],
    },
    secondary: {
      main: colors.lightBlue[500],
      light: colors.lightBlue[300],
      dark: colors.lightBlue[700],
    },
  },
});


root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          display: 'grid',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#00695f',
          // color: 'blue'
          // borderline: '1px solid pink',
        },
      }}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);