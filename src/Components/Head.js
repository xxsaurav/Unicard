import { Box } from '@mui/material'
import React from 'react'

const Head = () => {
    return (
        <Box
            sx={{ background: 'transparent', width: '100%', minHeight: '80px', zIndex: '40px',
        padding:'0 45px'
        }}
        >
            <Box sx={{ cursor: 'pointer', display:"flex" , width:'100%', justifyContent:"space-between"}}>
                <img alt="uni" src="assets/uni.svg"  width="120px" height="90px"
                color="black"
                />
            </Box>
        </Box>
    )
}

export default Head