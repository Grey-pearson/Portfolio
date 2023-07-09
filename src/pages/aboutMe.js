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
            display: 'flex',

        }}>
            <img alt='img of grey pearson' src={img}
                style={{
                    margin: '10px',
                    objectFit: 'cover',
                    objectPosition: 'right top',
                    borderRadius: '5px',
                    boxShadow: ' -7px 5px 5px rgba(0, 0, 0, .4)',
                }}
            />
            <Box sx={{
                bgcolor: 'secondary.main',
                maxWidth: '25rem',
                padding: '3rem',
                margin: '10px',
                borderRadius: '5px',
                boxShadow: ' 7px 5px 5px rgba(0, 0, 0, .4)',
            }}>
                Creative driven developer seeking to contribute to a code base. Works well in a group setting or independently. Focused on process improvement, SOP standardization and team problem solving. Striving to continue personal learning, team development and customer experience.
            </Box>
        </Box>
    );
}

export default AboutMe;