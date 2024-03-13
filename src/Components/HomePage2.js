import { Box, Typography } from '@mui/material'
import React from 'react'
import './HomePage2.css'
export const HomePage2 = () => {
    return (
        <Box
            className="page2"
        >
            <Box className='section'>
                <Box className="flex-container">
                    <p className='paragraph'
                    >
                        Earn 1% assured cashback <span>on your spends.</span> Get 5X
                    </p>
                    <p className='paragraph'

                    >
                        more value than cashback <span>at the Uni Store. Enjoy</span>
                    </p>
                    <p className='paragraph'

                    >
                        <span> round the clock </span>  Whatsapp support.<span> And it's</span>
                    </p>
                    <p className='paragraph'

                    >
                        lifetime free; <span> no joining fee, no annual charges.</span>
                    </p>
                </Box>
                <Box className="flex-container">
                    <Box className="down-arrow">
                        <img alt="down_arrow" src='assets/down_arrow.svg'/>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
