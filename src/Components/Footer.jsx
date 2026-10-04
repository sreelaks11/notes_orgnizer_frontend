import React from 'react'
import { Box, Typography, Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function Footer() {

    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                margin: 0,
                padding: 0,
                background:
                    'linear-gradient(135deg, #0B132B 0%, #14213D 55%, #0F766E 100%)',
                color: 'white'
            }}
        >

            {/* Main Footer */}
            <Box
                sx={{
                    width: '100%',
                    margin: 0,
                    padding: {
                        xs: '40px 20px',
                        sm: '50px 35px',
                        md: '60px 50px'
                    },
                    boxSizing: 'border-box'
                }}
            >

                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '2fr 1fr 1fr 1.2fr'
                        },
                        gap: {
                            xs: 4,
                            sm: 5,
                            md: 7
                        }
                    }}
                >

                    {/* About */}
                    <Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                                mb: 2
                            }}
                        >

                            <Box
                                sx={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: '12px',
                                    backgroundColor: '#0F766E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow:
                                        '0 8px 20px rgba(15,118,110,0.35)'
                                }}
                            >
                                <DescriptionOutlinedIcon
                                    sx={{
                                        fontSize: 26,
                                        color: 'white'
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '21px',
                                        sm: '23px'
                                    },
                                    fontWeight: 800,
                                    letterSpacing: '0.3px'
                                }}
                            >
                                Notes Organizer
                            </Typography>

                        </Box>


                        <Typography
                            sx={{
                                color: '#CBD5E1',
                                fontSize: '14px',
                                lineHeight: 1.8,
                                maxWidth: '390px'
                            }}
                        >
                            Organize your thoughts, ideas and important
                            information in one simple and secure place.
                            Create, manage and access your notes anytime.
                        </Typography>


                        <Button
                            onClick={() => navigate('/AddNotes')}
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                mt: 2.5,
                                color: 'white',
                                backgroundColor: '#0F766E',
                                px: 2.5,
                                py: 1,
                                borderRadius: '9px',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '13px',
                                '&:hover': {
                                    backgroundColor: '#0B5F5A'
                                }
                            }}
                        >
                            Create a Note
                        </Button>

                    </Box>


                    {/* Quick Links */}
                    <Box>

                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 800,
                                mb: 2.2
                            }}
                        >
                            Quick Links
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.3
                            }}
                        >

                            <Typography
                                onClick={() => navigate('/dashboard')}
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: 'white',
                                        transform: 'translateX(4px)'
                                    }
                                }}
                            >
                                Dashboard
                            </Typography>


                            <Typography
                                onClick={() => navigate('/Notes')}
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: 'white',
                                        transform: 'translateX(4px)'
                                    }
                                }}
                            >
                                All Notes
                            </Typography>


                            <Typography
                                onClick={() => navigate('/AddNotes')}
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: 'white',
                                        transform: 'translateX(4px)'
                                    }
                                }}
                            >
                                Add Note
                            </Typography>


                            <Typography
                                onClick={() => navigate('/calendar')}
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: 'white',
                                        transform: 'translateX(4px)'
                                    }
                                }}
                            >
                                Calendar
                            </Typography>

                        </Box>

                    </Box>


                    {/* Features */}
                    <Box>

                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 800,
                                mb: 2.2
                            }}
                        >
                            Features
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.3
                            }}
                        >

                            <Typography
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px'
                                }}
                            >
                                ✦ Easy Note Management
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px'
                                }}
                            >
                                ✦ Quick Search
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px'
                                }}
                            >
                                ✦ Categories & Tags
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px'
                                }}
                            >
                                ✦ Calendar Organization
                            </Typography>


                            <Typography
                                sx={{
                                    color: '#CBD5E1',
                                    fontSize: '14px'
                                }}
                            >
                                ✦ PDF Note Download
                            </Typography>

                        </Box>

                    </Box>


                    {/* Stay Organized */}
                    <Box>

                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 800,
                                mb: 2.2
                            }}
                        >
                            Stay Organized
                        </Typography>


                        <Typography
                            sx={{
                                color: '#CBD5E1',
                                fontSize: '14px',
                                lineHeight: 1.8,
                                mb: 2
                            }}
                        >
                            Keep your notes structured and your ideas
                            easy to find whenever you need them.
                        </Typography>


                        <Box
                            sx={{
                                p: 2,
                                borderRadius: '12px',
                                backgroundColor:
                                    'rgba(255,255,255,0.08)',
                                border:
                                    '1px solid rgba(255,255,255,0.12)'
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    mb: 0.5
                                }}
                            >
                                ✨ Your ideas matter
                            </Typography>


                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#CBD5E1',
                                    lineHeight: 1.6
                                }}
                            >
                                Write it. Organize it. Remember it.
                            </Typography>

                        </Box>

                    </Box>

                </Box>


                {/* Divider */}
                <Divider
                    sx={{
                        mt: 5,
                        mb: 3,
                        borderColor:
                            'rgba(255,255,255,0.15)'
                    }}
                />


                {/* Bottom Footer */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        }
                    }}
                >

                    <Typography
                        sx={{
                            color: '#CBD5E1',
                            fontSize: '12px',
                            textAlign: {
                                xs: 'center',
                                sm: 'left'
                            }
                        }}
                    >
                        © 2026 Notes Organizer. All rights reserved.
                    </Typography>


                    <Typography
                        sx={{
                            color: '#CBD5E1',
                            fontSize: '12px',
                            textAlign: 'center'
                        }}
                    >
                        Organize your notes. Simplify your life.
                    </Typography>


                    {/* Back to Top */}
                    <Button
                        onClick={scrollToTop}
                        startIcon={
                            <KeyboardArrowUpIcon />
                        }
                        sx={{
                            minWidth: 'auto',
                            color: 'white',
                            border:
                                '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '9px',
                            px: 1.8,
                            py: 0.7,
                            textTransform: 'none',
                            fontSize: '12px',
                            '&:hover': {
                                backgroundColor:
                                    'rgba(255,255,255,0.08)'
                            }
                        }}
                    >
                        Top
                    </Button>

                </Box>

            </Box>

        </Box>
    )
}

export default Footer
