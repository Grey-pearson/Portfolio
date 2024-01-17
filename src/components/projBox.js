import React from 'react';
import { Container, Link } from '@mui/material';


function ProjBox(projInfo) {
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
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <h1> {projInfo.projLink} </h1>
                <img src={projInfo.projPic} />
            </Container>
        </Link>
    )
}

export default ProjBox