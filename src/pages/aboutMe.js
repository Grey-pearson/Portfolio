import React from 'react';
import img from '../imgs/fullmetal.jpg'
import { Box } from '@mui/material';
// import { maxWidth } from '@mui/system';

// const BoxPlus = styled(Box)(({ theme }) => ({
//     // padding: '10px',
//     margin: '10px',
// }))

function AboutMe() {
    return (
        <Box sx={{
            display: 'grid',
            gridAutoFlow: 'column',
        }}>
            <img alt='img of grey pearson' src={img}
                style={{
                    padding: '10px',
                    borderRadius: '15px',
                }}
            />
            <Box sx={{
                bgcolor: 'secondary.main',
                maxWidth: '400px',
                padding: '20px',
                margin: '10px',
                borderRadius: '5px'
            }}>
                paragraph about me ig? or i blah blah blah lorem ipsem i blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah asdfas dfasdf
            </Box>
        </Box>
    );
}

export default AboutMe;