// redirects to specific part of the page

import React from 'react';
import { Box, Link } from '@mui/material';

const styles = {
    link: {
        padding: '0.7rem 5rem',
        color: 'black',
        // hover idk
    },
    box: {
        background: '#03a9f4',
        position: 'fixed',
        top: '0',
        left: '0',
        overflow: 'hidden',
        width: '100%',
        // height: '5vh',
        display: 'flex',
        // alignContent: 'center',
        justifyContent: 'center',
        boxShadow: ' 0px 0.4rem 0.3rem rgba(0, 0, 0, .4)'
    },
};


function NavBar() {

    return (
        <Box style={styles.box}>
            <Link href='blank' underline="none" style={styles.link}>about me</Link>

            <Link href='blank' underline="none" style={styles.link}>projects</Link>

            <Link href='blank' underline="none" style={styles.link}>contact</Link>
        </Box>
    )

}

export default NavBar