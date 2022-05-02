import React from "react";

import { 
  Box, 
  Typography,
  Container,
} from "@mui/material";

import OpenPositions from './OpenPositions';
import bannerImage from "../images/banner.jpeg";

function Home() {
  return (

    <>

    <Box sx={ { 
      'height': '180px',
      'overflow': 'hidden',
      'position': 'relative'
    }}>

      <Typography 
        variant="h2"
        sx={{ 
          textAlign: "center",
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          'width': '100%',
          'height': '100%'
        }}>
        Join Us
      </Typography>

      <img
          src={ bannerImage }
          style={{
          'objectFit': 'cover',
          'objectPosition': '50% 50%',
          'width': '100%',
          'height': '100%'
          }}
          alt="Join Us"
          loading="lazy"
        />
    </Box>
      
    <Container>
      <Typography 
        variant="h3" 
        pt={ 5 }
        pb={ 2 }
        sx={{ textAlign: "center" }}>
        Open Positions
      </Typography>

      <Typography
        pb={ 5 }
        sx={{ 
          textAlign: "center", 
          maxWidth: "800px", 
          margin: "0 auto" 
        }}
      >
        Our data is training and testing autonomous systems at companies around
        the world. We're looking for talented visionaries to help us to expand
        our impact on the way artificial intelligence is developed.
      </Typography>

      <OpenPositions/>

    </Container>
  </>
    

  )
}

export default Home;
