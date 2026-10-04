import React, { useContext } from 'react'
import { Box, Typography, Button,Switch } from '@mui/material'
import { useNavigate } from 'react-router-dom'


import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { ThemeContext } from '../Theme/ThemeContext'

export default function Header() {
     const navigate = useNavigate()

    const { darkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
       <Box
                sx={{
                    background: 'linear-gradient(135deg, #0B132B 0%, #14213D 55%, #0F766E 100%)',
                    color: 'white',
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 1.5, md: 2 }
                }}
            >

                <Box
                    sx={{
                        maxWidth: '1400px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: 3
                    }}
                >

                    {/* TITLE */}

                    <Box>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '26px',
                                    sm: '32px',
                                    md: '38px'
                                },
                                fontWeight: 800,
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Notes Organizer
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.8,
                                color: '#D6F5F2',
                                fontSize: {
                                    xs: '14px',
                                    sm: '15px',
                                    md: '16px'
                                }
                            }}
                        >
                            Organize your thoughts, ideas and important notes.
                        </Typography>

                    </Box>


                    {/* LOGOUT */}

                    {/* THEME + LOGOUT */}

<Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
    }}
>

    {/* THEME SWITCH */}

    <Box
        sx={{
            display: 'flex',
            alignItems: 'center'
        }}
    >

        <LightModeIcon
            sx={{
                color: 'white',
                fontSize: 20
            }}
        />

        <Switch
            checked={darkMode}
            onChange={toggleTheme}
            sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'white'
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#0F766E'
                },
                '& .MuiSwitch-track': {
                    backgroundColor: 'rgba(255,255,255,0.5)'
                }
            }}
        />

        <DarkModeIcon
            sx={{
                color: 'white',
                fontSize: 20
            }}
        />

    </Box>


    {/* LOGOUT */}

    <Button
        variant="outlined"
        onClick={() => {
            sessionStorage.removeItem('user')
            navigate('/login')
        }}
        sx={{
            color: 'white',
            borderColor: 'rgba(255,255,255,0.5)',
            borderRadius: '10px',
            px: 3,
            py: 1,
            textTransform: 'none',
            fontWeight: 600,

            '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.08)'
            }
        }}
    >
        Logout
    </Button>

</Box>

                </Box>

            </Box>
    </div>
  )
}
