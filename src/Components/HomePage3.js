import { Box, Grid } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

import './HomePage3.css'
export const HomePage3 = () => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box
            className="page3"
        >
            <Box className='section-2'>

                <Grid container spacing={{ xs: 1, md: 2 }}

                    padding={4}
                    direction={isMediumScreen ? "row" : "column-reverse"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} md={6}  >
                        <p className={`paragraph ${!isMediumScreen && "size-28"}`}>
                            1% assured cashback on your spends.

                            <span>The more you spend, the more you earn. </span>

                        </p>
                        <p className={`paragraph ${!isMediumScreen && "size-28"}`}>
                            <span className='size-14'>
                                Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.
                            </span>
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}  >
                        <img src="assets/one_percent_cashback.png" height={isMediumScreen ? "448px" : '280px'} width={isMediumScreen ? '420px' : '220px'}></img>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, md: 2 }}

                    padding={4}
                    direction={isMediumScreen ? "row" : "column-reverse"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} md={6}  >
                        <p className={`paragraph ${!isMediumScreen && "size-28"}`}>
                            5x more value than your cashback,

                            <span> only at the Uni Store. </span>

                        </p>

                    </Grid>

                    <Grid item xs={12} sm={6} md={6}  >
                        <img src="assets/five_x_rewards.png" height={isMediumScreen ? "448px" : '280px'} width={isMediumScreen ? '420px' : '220px'}></img>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 1, md: 2 }}

                    padding={4}
                    direction={isMediumScreen ? "row" : "column-reverse"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={6} md={6}  >
                        <p className={`paragraph ${!isMediumScreen && "size-28"}`}>
                           Zero Forex Markup.

                            <span> Go international, without any fees. </span>

                        </p>

                    </Grid>

                    <Grid item xs={12} sm={6} md={6}  >
                        <img src="assets/forex_globe.png" height={isMediumScreen ? "448px" : '280px'} width={isMediumScreen ? '420px' : '220px'}></img>
                    </Grid>
                </Grid>

            </Box>
        </Box>

    )
}
