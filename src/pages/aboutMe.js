import React from 'react';
import img from '../imgs/fullmetal.jpg'
import { Box, Grid } from '@mui/material';
// import { maxWidth } from '@mui/system';

// const BoxPlus = styled(Box)(({ theme }) => ({
//     // padding: '10px',
//     margin: '10px',
// }))

function AboutMe() {
    return (
        <Box>
            <Grid container rowSpacing={1} >
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <img alt='img of grey pearson' src={img}
                        style={{
                            margin: '10px',
                            // objectFit: 'cover',
                            // objectPosition: 'right top',
                            borderRadius: '5px',
                            boxShadow: ' -7px 5px 5px rgba(0, 0, 0, .4)',
                        }} />
                </Grid>

                <Grid item xs={3}
                    sx={{
                        bgcolor: 'secondary.main',
                        // height: '100%',
                        padding: '2rem',
                        // paddingTop: '2rem', find out how to center text all the way
                        margin: '10px',
                        borderRadius: '5px',
                        boxShadow: ' 7px 5px 5px rgba(0, 0, 0, .4)',
                    }}>
                    Creative driven developer seeking to contribute to a code base. Works well in a group setting or independently. Focused on process improvement, SOP standardization and team problem solving. Striving to continue personal learning, team development and customer experience.
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Box>
    );
}

export default AboutMe;