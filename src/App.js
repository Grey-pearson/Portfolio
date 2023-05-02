import React from 'react';
import { Box } from '@mui/material';
import AboutMe from './pages/aboutMe';
import NavBar from './components/navBar'

function App() {
  return (
    <Box>
      <NavBar />
      <AboutMe />
    </Box>
  );
}

export default App;