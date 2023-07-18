import React from 'react';
import ProjBox from '../components/projBox';
import { Box } from '@mui/material'

function Project() {
    // box that takes up whole screen changing background? 
    // boxes component that links to githubs
    // screaming honestly
    return (
        <Box sx={{
            backgroundColor: '#03a9f4',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '15vh',
            width: '90vw',
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.4)',
        }}>
            <ProjBox />
            <ProjBox />
            <ProjBox />
        </Box>
    )
}

export default Project