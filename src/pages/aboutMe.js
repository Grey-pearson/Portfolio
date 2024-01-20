import React from 'react';
import img from '../imgs/fullmetal.jpg'
import { Box, Grid } from '@mui/material';
// import { maxWidth } from '@mui/system';

// const BoxPlus = styled(Box)(({ theme }) => ({
//     // padding: '10px',
//     margin: '10px',
// }))

// rewrite this. maybe make seprate styling function above whatever that is called, need to make this reactive from the get go
// need new colors as well, more pastel probably ig

/* SCSS RGB */
// lazuli: rgba(34, 87, 122, 1);
// virdigris: rgba(56, 163, 165, 1);
// emerald: rgba(87, 204, 153, 1);
// light green: rgba(128, 237, 153, 1);
// tea green: rgba(199, 249, 204, 1);
// burn sienna: rgba(231, 111, 81)

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