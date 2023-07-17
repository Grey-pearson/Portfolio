import React from 'react';
import ProjBox from '../components/projBox';
import { Box } from '@mui/material'

function Project() {
    // box that takes up whole screen changing background? 
    // boxes component that links to githubs
    // screaming honestly
    return (
        <Box sx={{
            backgroundColor: 'pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '15vh',
            width: '90vw',
        }}>
            <ProjBox />
            <ProjBox />
            <ProjBox />
        </Box>
    )
}

export default Project