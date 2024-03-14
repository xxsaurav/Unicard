import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MyContext } from '../store/context';
import './PhoneNumber.css'
const PhoneNumber = ({ isVisible, home }) => {
    const { text,
        checked,
        error,
        handleInputChange,
        handleChange,
        handleClear
    } = useContext(MyContext)
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [isVisibleTextInMobile, setIsVisibleTextInMobile] = useState(false);
    const handleApplyNow = (e) => {
        if (!isSmallScreen) {
            setIsVisibleTextInMobile(prev => !prev)
        }
        if(text.length===10){
            window.alert("Feature not implemented")
        }
    }

    return (
        <>
            {(isVisible && isSmallScreen) && <div className={!home ? 'sticky-footer' : ""}>
                {<TextField
                    variant='filled'

                    value={text}
                    onChange={handleInputChange}

                    inputProps={{
                        style: { color: 'grey', justifyContent: 'center', alignItems: 'center' }
                    }}


                    placeholder="Enter phone number"
                    sx={{
                        bgcolor: 'black', borderRadius: '.75rem',
                        borderBottom: 'none',
                        width: '65%'

                    }}

                    InputProps={{
                        endAdornment:
                            <>
                                {text && !error && (
                                    <IconButton onClick={handleClear} edge="start">
                                        <ClearIcon sx={{ color: '#ffffff' }} />
                                    </IconButton>
                                )}
                                {error && <PriorityHighIcon sx={{ color: 'red' }} />}
                                <Button
                                    disabled={error}
                                    sx={{
                                        backgroundColor: '#FDEF78',
                                        lineHeight: '1.75rem', fontSize: '.875rem',
                                        textAlign: 'center', paddingTop: '0.5rem', pb: '0.5rem', pl: '1rem',
                                        pr: '1rem',
                                        borderRadius: '0.75rem',
                                        ml: '0.5rem', zIndex: '10',
                                        textTransform: 'none',
                                        color: 'black',
                                        whiteSpace: 'nowrap',
                                        '&:hover': { backgroundColor: '#FDEF78' },
                                        // width:'100px'
                                    }}
                                    onClick={handleApplyNow}                               >
                                    Apply Now
                                </Button>
                            </>,
                        disableUnderline: true,
                    }}
                />}

                {<FormControlLabel

                    control={<Checkbox
                        sx={{
                            color: 'black',
                            '&.Mui-checked': {
                                color: 'black',
                            },

                            '& .MuiSvgIcon-root': { fontSize: 18, color: 'black' }

                        }}
                        checked={checked}

                        onChange={handleChange} />}

                    label={
                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                            You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
                        </Typography>
                    }
                    sx={{ width: '65%', mt: '20px' }}
                />
                }
            </div>}
            {!isSmallScreen && <>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        pt: '2rem', pb: '2rem',
                        bottom: '0',
                        width: '100%',

                    }}
                    className="apply-button"
                >
                    <Box sx={{
                        width: "90vw",
                        mr: "auto", ml: 'auto'
                    }}>
                        <Box
                            sx={{
                                ml: '.75rem'
                            }}
                        >


                            {isVisibleTextInMobile &&

                                <TextField
                                    variant='filled'

                                    value={text}
                                    onChange={handleInputChange}

                                    inputProps={{
                                        style: {
                                            color: 'grey', justifyContent: 'center', alignItems: 'center',

                                        }

                                    }}


                                    placeholder="Enter phone number"
                                    sx={{
                                        bgcolor: 'black', borderTopRightRadius: '.75rem',
                                        borderTopLeftRadius: '.75rem',
                                        borderBottom: 'none',
                                        alignItems: 'center',


                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment:
                                            <>
                                                {text && !error && (
                                                    <IconButton onClick={handleClear} edge="start">
                                                        <ClearIcon sx={{ color: '#ffffff' }} />
                                                    </IconButton>
                                                )}
                                                {error && <PriorityHighIcon sx={{ color: 'red' }} />}
                                            </>
                                    }}
                                    fullWidth

                                />}

                        </Box>
                        <Button
                            disabled={error}
                            fullWidth
                            sx={{
                                backgroundColor: '#FDEF78',
                                lineHeight: '1.75rem', fontSize: '.875rem',
                                textAlign: 'center', paddingTop: '0.5rem', pb: '0.5rem', pl: '1rem',
                                pr: '1rem',
                                borderRadius: '0.75rem',
                                ml: '0.5rem', zIndex: '1000',
                                textTransform: 'none',
                                color: 'black',
                                whiteSpace: 'nowrap',
                                '&:hover': { backgroundColor: '#FDEF78', cursor: 'pointer' },



                            }}
                            onClick={handleApplyNow}                               >
                            Apply Now
                        </Button>
                    </Box>
                </Box>
            </>}

        </>
    )
}

export default PhoneNumber