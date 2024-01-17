import React from 'react';
import { Box } from '@mui/material';
import AboutMe from './pages/aboutMe';
import NavBar from './components/navBar'
import Project from './pages/projects';

// const styles = {
//   projectStyle: {
//     width: '100%',
//     backgroundColor: 'green',
//   },
// }

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100vh',
    }}>
      <AboutMe />
    </Box>
  );
}

export default App;