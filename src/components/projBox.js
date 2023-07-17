import React from 'react';
import { Container, Box, Link } from '@mui/material';


function ProjBox() {
    // box that takes up whole screen changing background? 
    // boxes component that links to githubs
    // screaming honestly

    return (
        <Link>
            <Container sx={{
                color: 'black',
                // backgroundColor: 'white',
                // maxHeight: '10vh',
                // maxWidth: '10vw',
                height: '10rem',
                width: '10rem',
                margin: '1rem',
                padding: '1rem',
                backgroundColor: 'white',
                border: '1px solid black',
            }}>

            </Container>
        </Link>
    )
}

export default ProjBox