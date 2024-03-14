
import React, { useState } from 'react'
import "./Home.css"
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';
import PhoneNumber from './PhoneNumber';
const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
   
   return (

        <Box
            className="video-background"
        >
            <Box
                className="content"
            >
                <Grid container spacing={{ xs: 2, md: 3 }}
                
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    padding={4}
                    direction={isSmallScreen ? "row" : "column-reverse"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid  item xs={12} sm={6} md={6}  >
                        <Typography align="left" variant="h2"
                         sx={{
                            fontSize: { xs: '2rem', sm: '3rem' },
                            fontWeight: 'bold',
                          }}>NX Wave.</Typography>
                        <Typography align="left" variant='h3'
                         sx={{
                            fontSize: { xs: '2rem', sm: '3rem' },
                            fontWeight: 'bold',
                          }}>The next-gen credit card for those who love rewards</Typography>
                        <Typography align="left"
                         sx={{
                            fontSize: { xs: '.75rem', sm: '1rem' },
                            fontWeight: 'bold',
                          }}
                        > 1% Cashback + 5x Rewards + Zero Forex Markup</Typography>
                        <br></br>
                        <br></br>
                      { isSmallScreen && <PhoneNumber isVisible={true } home={true}/>}
                       
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >

                        <img src="assets/nx_wave_hero.png" height={isSmallScreen ? "420px" : '220px'} width={isSmallScreen ? '420px' : '220px'}></img>
                    </Grid>
                </Grid>
            </Box>
            <video autoPlay loop muted>
                <source
                    src='assets/nxt_wave_bg.mp4'
                    type='video/mp4'
                ></source>
            </video>
        </Box>
    )
}

export default Home