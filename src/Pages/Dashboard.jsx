import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    Paper,
    Button,
    Grid
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Dashboard() {

    const navigate = useNavigate()
    const [userName, setUserName] = useState('')

    useEffect(() => {

    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    })

    const user = JSON.parse(
        sessionStorage.getItem('user')
    )

    if (user) {
        setUserName(user.fullname)
    }

}, [])


    return (

        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                color: 'text.primary'
            }}
        >

            {/* MAIN CONTENT */}

            <Box
                sx={{
                    maxWidth: '1400px',
                    margin: 'auto',
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 5
                    },
                    py: {
                        xs: 3,
                        md: 5
                    }
                }}
            >


                {/* WELCOME SECTION */}

                <Paper
                    data-aos="fade-up"
                    elevation={0}
                    sx={{
                        p: {
                            xs: 3,
                            sm: 4,
                            md: 5
                        },
                        borderRadius: '20px',
                        mb: 4,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: {
                                xs: '22px',
                                sm: '26px',
                                md: '30px'
                            },
                            fontWeight: 800,
                            color: 'text.primary'
                        }}
                    >
Welcome, {userName}! 👋
                    </Typography>


                    <Typography
                        sx={{
                            mt: 1,
                            color: 'text.secondary',
                            fontSize: {
                                xs: '14px',
                                sm: '15px',
                                md: '16px'
                            },
                            lineHeight: 1.7
                        }}
                    >
                        Manage your notes, organize your ideas and
                        keep everything important in one place.
                    </Typography>


                    <Button
                        onClick={() => navigate('/AddNotes')}
                        variant="contained"
                        sx={{
                            mt: 3,
                            backgroundColor: '#0F766E',
                            borderRadius: '10px',
                            px: 3,
                            py: 1.2,
                            textTransform: 'none',
                            fontWeight: 700,
                            boxShadow:
                                '0 8px 20px rgba(15,118,110,0.20)',

                            '&:hover': {
                                backgroundColor: '#0B5F5A'
                            }
                        }}
                    >
                        + Create New Note
                    </Button>

                </Paper>



                {/* STATISTICS */}

                



                {/* QUICK ACTIONS */}

                <Typography
                    data-aos="fade-right"
                    sx={{
                        fontSize: {
                            xs: '20px',
                            sm: '23px',
                            md: '26px'
                        },
                        fontWeight: 800,
                        mb: 2.5,
                        color: 'text.primary'
                    }}
                >
                    Quick Actions
                </Typography>


                <Grid
                    container
                    spacing={2.5}
                >


                    {/* CREATE NOTE */}

                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 4
                        }}
                    >

                        <Paper
                            data-aos="fade-up"
                            data-aos-delay="100"
                            onClick={() => navigate('/AddNotes')}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: '18px',
                                border: '1px solid',
                                borderColor: 'divider',
                                cursor: 'pointer',
                                backgroundColor: 'background.paper',
                                color: 'text.primary',
                                transition: '0.3s',

                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: '#0F766E',
                                    boxShadow:
                                        '0 12px 30px rgba(15,118,110,0.12)'
                                }
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    mb: 1
                                }}
                            >
                                📝
                            </Typography>


                           <Typography
    onClick={() => navigate('/AddNotes')}
    sx={{
        fontSize: '19px',
        fontWeight: 700,
        color: 'text.primary',
        cursor: 'pointer'
    }}
>
    Create Note
</Typography>


                            <Typography
                                sx={{
                                    mt: 0.7,
                                    fontSize: '14px',
                                    color: 'text.secondary'
                                }}
                            >
                                Add a new note to your collection.
                            </Typography>

                        </Paper>

                    </Grid>



                    {/* VIEW NOTES */}

                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 4
                        }}
                    >

                        <Paper
                            data-aos="fade-up"
                            data-aos-delay="200"
                            onClick={() => navigate('/Notes')}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: '18px',
                                border: '1px solid',
                                borderColor: 'divider',
                                cursor: 'pointer',
                                backgroundColor: 'background.paper',
                                color: 'text.primary',
                                transition: '0.3s',

                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: '#0F766E',
                                    boxShadow:
                                        '0 12px 30px rgba(15,118,110,0.12)'
                                }
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    mb: 1
                                }}
                            >
                                📚
                            </Typography>


                            <Typography
                                sx={{
                                    fontSize: '19px',
                                    fontWeight: 700,
                                    color: 'text.primary'
                                }}
                            >
                                View All Notes
                            </Typography>


                            <Typography
                                sx={{
                                    mt: 0.7,
                                    fontSize: '14px',
                                    color: 'text.secondary'
                                }}
                            >
                                Browse and manage all your notes.
                            </Typography>

                        </Paper>

                    </Grid>



                    {/* CALENDAR */}

                    <Grid
                        size={{
                            xs: 12,
                            sm: 12,
                            md: 4
                        }}
                    >

                        <Paper
                            data-aos="fade-up"
                            data-aos-delay="300"
                            onClick={() => navigate('/calendar')}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: '18px',
                                border: '1px solid',
                                borderColor: 'divider',
                                cursor: 'pointer',
                                backgroundColor: 'background.paper',
                                color: 'text.primary',
                                transition: '0.3s',

                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: '#0F766E',
                                    boxShadow:
                                        '0 12px 30px rgba(15,118,110,0.12)'
                                }
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    mb: 1
                                }}
                            >
                                📅
                            </Typography>


                            <Typography
                                sx={{
                                    fontSize: '19px',
                                    fontWeight: 700,
                                    color: 'text.primary'
                                }}
                            >
                                Notes Calendar
                            </Typography>


                            <Typography
                                sx={{
                                    mt: 0.7,
                                    fontSize: '14px',
                                    color: 'text.secondary'
                                }}
                            >
                                View your notes by creation date.
                            </Typography>

                        </Paper>

                    </Grid>

                </Grid>









            <Paper
             data-aos="fade-down"
    onClick={() => navigate('/statistics')}
    sx={{
        p: 3,
        mt:5,
        borderRadius: '18px',
        cursor: 'pointer',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',

        '&:hover': {
            transform: 'translateY(-5px)',
            transition: '0.3s'
        }
    }}
>
    <Typography
    
        sx={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#0F766E'
        }}
    >
        Statistics
    </Typography>

    <Typography
        sx={{
            color: 'text.secondary',
            mt: 1
        }}
    >
        View notes charts and statistics
    </Typography>
</Paper>















                {/* WHY USE NOTES ORGANIZER */}

                <Box
                    sx={{
                        mt: {
                            xs: 6,
                            sm: 7,
                            md: 8
                        },
                        mb: {
                            xs: 3,
                            sm: 4,
                            md: 5
                        }
                    }}
                >

                    {/* SECTION HEADING */}

                    <Typography
                        data-aos="fade-right"
                        sx={{
                            fontSize: {
                                xs: '21px',
                                sm: '24px',
                                md: '27px'
                            },
                            fontWeight: 800,
                            color: 'text.primary'
                        }}
                    >
                        Why Use Notes Organizer?
                    </Typography>


                    <Typography
                        data-aos="fade-right"
                        data-aos-delay="100"
                        sx={{
                            mt: 1,
                            mb: {
                                xs: 3,
                                sm: 3.5,
                                md: 4
                            },
                            color: 'text.secondary',
                            fontSize: {
                                xs: '13px',
                                sm: '14px',
                                md: '15px'
                            },
                            lineHeight: 1.7,
                            maxWidth: '700px'
                        }}
                    >
                        Keep your ideas, tasks and important information organized
                        in one simple and convenient place.
                    </Typography>



                    {/* FEATURE CARDS */}

                    <Grid
                        container
                        spacing={{
                            xs: 2,
                            sm: 2.5,
                            md: 3
                        }}
                    >


                        {/* CARD 1 */}

                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}
                        >

                            <Paper
                                data-aos="fade-up"
                                data-aos-delay="100"
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: {
                                        xs: 2.5,
                                        sm: 3,
                                        md: 3.5
                                    },
                                    borderRadius: '18px',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    backgroundColor: 'background.paper',

                                    textAlign: {
                                        xs: 'center',
                                        sm: 'left'
                                    },

                                    transition: '0.3s',

                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        borderColor: '#0F766E',
                                        boxShadow:
                                            '0 12px 30px rgba(15,118,110,0.12)'
                                    }
                                }}
                            >

                                <Box
                                    sx={{
                                        width: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        height: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        mx: {
                                            xs: 'auto',
                                            sm: 0
                                        },
                                        mb: 2,
                                        borderRadius: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background:
                                            'linear-gradient(135deg, #0B132B, #0F766E)'
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '27px',
                                                sm: '30px'
                                            }
                                        }}
                                    >
                                        🗂️
                                    </Typography>

                                </Box>


                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '18px',
                                            sm: '19px'
                                        },
                                        fontWeight: 700,
                                        color: 'text.primary'
                                    }}
                                >
                                    Stay Organized
                                </Typography>


                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: {
                                            xs: '13px',
                                            sm: '14px'
                                        },
                                        lineHeight: 1.7,
                                        color: 'text.secondary'
                                    }}
                                >
                                    Organize your notes using categories and
                                    tags for easy access whenever you need them.
                                </Typography>

                            </Paper>

                        </Grid>



                        {/* CARD 2 */}

                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}
                        >

                            <Paper
                                data-aos="fade-up"
                                data-aos-delay="200"
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: {
                                        xs: 2.5,
                                        sm: 3,
                                        md: 3.5
                                    },
                                    borderRadius: '18px',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    backgroundColor: 'background.paper',

                                    textAlign: {
                                        xs: 'center',
                                        sm: 'left'
                                    },

                                    transition: '0.3s',

                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        borderColor: '#0F766E',
                                        boxShadow:
                                            '0 12px 30px rgba(15,118,110,0.12)'
                                    }
                                }}
                            >

                                <Box
                                    sx={{
                                        width: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        height: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        mx: {
                                            xs: 'auto',
                                            sm: 0
                                        },
                                        mb: 2,
                                        borderRadius: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background:
                                            'linear-gradient(135deg, #14213D, #0F766E)'
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '27px',
                                                sm: '30px'
                                            }
                                        }}
                                    >
                                        🔍
                                    </Typography>

                                </Box>


                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '18px',
                                            sm: '19px'
                                        },
                                        fontWeight: 700,
                                        color: 'text.primary'
                                    }}
                                >
                                    Find Notes Quickly
                                </Typography>


                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: {
                                            xs: '13px',
                                            sm: '14px'
                                        },
                                        lineHeight: 1.7,
                                        color: 'text.secondary'
                                    }}
                                >
                                    Search through your notes and quickly find
                                    the information you need.
                                </Typography>

                            </Paper>

                        </Grid>



                        {/* CARD 3 */}

                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4
                            }}
                        >

                            <Paper
                                data-aos="fade-up"
                                data-aos-delay="300"
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: {
                                        xs: 2.5,
                                        sm: 3,
                                        md: 3.5
                                    },
                                    borderRadius: '18px',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    backgroundColor: 'background.paper',

                                    textAlign: {
                                        xs: 'center',
                                        sm: 'left'
                                    },

                                    transition: '0.3s',

                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        borderColor: '#0F766E',
                                        boxShadow:
                                            '0 12px 30px rgba(15,118,110,0.12)'
                                    }
                                }}
                            >

                                <Box
                                    sx={{
                                        width: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        height: {
                                            xs: '55px',
                                            sm: '60px'
                                        },
                                        mx: {
                                            xs: 'auto',
                                            sm: 0
                                        },
                                        mb: 2,
                                        borderRadius: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background:
                                            'linear-gradient(135deg, #0B132B, #14213D, #0F766E)'
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '27px',
                                                sm: '30px'
                                            }
                                        }}
                                    >
                                        📅
                                    </Typography>

                                </Box>


                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '18px',
                                            sm: '19px'
                                        },
                                        fontWeight: 700,
                                        color: 'text.primary'
                                    }}
                                >
                                    Track Your Notes
                                </Typography>


                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: {
                                            xs: '13px',
                                            sm: '14px'
                                        },
                                        lineHeight: 1.7,
                                        color: 'text.secondary'
                                    }}
                                >
                                    Use the notes calendar to view and manage
                                    your notes based on their creation dates.
                                </Typography>

                            </Paper>

                        </Grid>

                    </Grid>

                </Box>


            </Box>

        </Box>
    )
}


export default Dashboard