import React from 'react';
import img from '../imgs/square-example.png'
import { Box, styled } from '@mui/material';
// import { maxWidth } from '@mui/system';

const BoxPlus = styled(Box)(({ theme }) => ({
    // padding: '10px',
    margin: '10px',
}))

function AboutMe() {
    return (
        <Box sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            // alignContent: 'center',
            // justifyContent: 'center',
            // height: 'auto',
        }}>
            <img sx={{
                // maxWidth: '100%',
                // height: 'auto',
                bgcolor: 'primary.light',
                padding: '10px',
                margin: '10px',
            }}
                alt='img of grey pearson'
                src={img}
            />
            <Box sx={{
                bgcolor: 'secondary.main',
                maxWidth: '400px',
                padding: '10px',
                margin: '10px',
            }}>
                paragraph about me ig? or i blah blah blah lorem ipsem i blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            </Box>
        </Box>
    );
}

export default AboutMe;