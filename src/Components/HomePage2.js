import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './HomePage2.css'
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';
export const HomePage2 = () => {
    const [animated, setAnimated] = useState([false, false, false, false, false]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    useEffect(() => {
        console.log(animated)
        if (animated.filter(anim => anim).length === 4) {
            setTimeout(() => {
                setAnimated(prevState => {
                    const newState = [...prevState];
                    newState[4] = true;
                    return newState;
                })
            }, 1000)
        }
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const paragraphs = document.querySelectorAll('.paragraph');
            paragraphs.forEach((paragraph, index) => {
                const rect = paragraph.getBoundingClientRect();
                if (rect.top < windowHeight && !animated[index]) {
                    setTimeout(() => {
                        setAnimated(prevState => {
                            const newState = [...prevState];
                            newState[index] = true;
                            return newState;
                        });
                    }, index * 1000);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animated]);

    return (
        <Box
            className="page2"
        >
            <Box className='section'>
                <Box className="flex-container">
                    <p className={`paragraph ${!isSmallScreen &&"size-28"} ${animated[0] ? 'slide-in' : 'hidden'}`}
                    >
                        Earn 1% assured cashback <span>on your spends.</span> Get 5X
                    </p>
                    <p className={`paragraph ${!isSmallScreen &&"size-28"} ${animated[1] ? 'slide-in' : 'hidden'}`}

                    >
                        more value than cashback <span>at the Uni Store. Enjoy</span>
                    </p>
                    <p className={`paragraph ${!isSmallScreen &&"size-28"} ${animated[2] ? 'slide-in' : 'hidden'}`}

                    >
                        <span> round the clock </span>  Whatsapp support.<span> And it's</span>
                    </p>
                    <p className={`paragraph ${!isSmallScreen &&"size-28"} ${animated[3] ? 'slide-in' : 'hidden'}`}

                    >
                        lifetime free; <span> no joining fee, no annual charges.</span>
                    </p>
                </Box>
                <Box className="flex-container">
                    <Box className={`down-arrow ${animated[4] ? 'slide-out' : 'hidden'}`}>
                        <img alt="down_arrow" src='assets/down_arrow.svg' />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
