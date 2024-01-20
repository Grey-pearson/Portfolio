import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* SCSS RGB */
// lazuli: rgba(34, 87, 122, 1);
// virdigris: rgba(56, 163, 165, 1);
// emerald: rgba(87, 204, 153, 1);
// light green: rgba(128, 237, 153, 1);
// tea green: rgba(199, 249, 204, 1);
// burn sienna: rgba(231, 111, 81)


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
          backgroundColor: 'rgba(34, 87, 122, 1)',
          color: 'blue',
          borderline: '1px solid pink',
        },
      }}
    />
    <App />
  </React.StrictMode>
);