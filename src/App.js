import React from 'react';
import { Box } from '@mui/material';
import AboutMe from './pages/aboutMe';
import NavBar from './components/navBar'
import Project from './pages/projects';

function App() {
  return (
    <Box>
      <NavBar />
      <AboutMe />
      <Project />
    </Box>
  );
}

export default App;