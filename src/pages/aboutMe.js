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
                    margin: '10px',
                    objectFit: 'cover',
                    objectPosition: 'right top',
                    borderRadius: '5px',
                    boxShadow: ' -7px 5px 5px rgba(0, 0, 0, .5)',
                }}
            />
            <Box sx={{
                bgcolor: 'secondary.main',
                maxWidth: '316px',
                padding: '20px',
                margin: '10px',
                borderRadius: '5px',
                boxShadow: ' 7px 5px 5px rgba(0, 0, 0, .5)',
            }}>
                paragraph about me ig? or i blah blah blah lorem ipsem i blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah asdfas dfasdf
            </Box>
        </Box>
    );
}

export default AboutMe;