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
            width: '100%',
        }}>
            <ProjBox />
        </Box>
    )
}

export default Project