// redirects to specific part of the page

import React from 'react';
import { Box, Link } from '@mui/material';

// find out how to theme link components to condense mui

function NavBar() {


    return (
        <Box sx={{
            bgcolor: 'secondary.main',
            position: 'fixed',
            top: '0',
            left: '0',
            overflow: 'hidden',
            width: '100%',
            height: '5vh',

        }}>
            <Link href='blank' underline="none" sx={{
                padding: '10px',
                margin: '10px',
            }}>about me</Link>

            <Link href='blank' underline="none" sx={{
                padding: '10px',
                margin: '10px',
            }}>projects</Link>

            <Link href='blank' underline="none" sx={{
                padding: '10px',
                margin: '10px',
            }}>contact</Link>
        </Box>
    )


}

export default NavBar