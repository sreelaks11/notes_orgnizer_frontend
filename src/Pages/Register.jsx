import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerAPI } from '../Services/apiservices'


function Register() {
  const navigate = useNavigate()

  const [registerData, setregisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const handleChange = (e) => {
    setregisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleregister = async (e) => {
    e.preventDefault()

    try {
     const res = await registerAPI(registerData)

console.log(res.data)
alert('registered successfully')

setregisterData({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: ""
})

navigate('/login')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (

    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        background:
          'linear-gradient(135deg, #0B132B 0%, #14213D 55%, #0F766E 100%)',

        px: { xs: 2, sm: 4 },
        py: 4
      }}
    >

      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          minHeight: { xs: 'auto', md: '600px' },

          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },

          borderRadius: '28px',
          overflow: 'hidden',

          backgroundColor: 'background.paper',

          boxShadow: '0 25px 60px rgba(0,0,0,0.35)'
        }}
      >

        {/* LEFT SIDE */}

        <Box
          sx={{
            width: { xs: '100%', md: '50%' },

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            p: { xs: 4, sm: 6, md: 7 },

            background:
              'linear-gradient(160deg, #0F766E, #0B132B)',

            color: 'white'
          }}
        >

          <Typography
            sx={{
              fontSize: {
                xs: '28px',
                sm: '34px',
                md: '40px'
              },

              fontWeight: 800,
              letterSpacing: '-1px',
              mb: 2
            }}
          >
            Notes Organizer
          </Typography>


          <Typography
            sx={{
              fontSize: {
                xs: '16px',
                md: '18px'
              },

              lineHeight: 1.7,
              color: '#D6F5F2',
              maxWidth: '430px',
              mb: 5
            }}
          >
            Create your account and start organizing your thoughts,
            ideas, and important notes in one simple place.
          </Typography>


          {/* FEATURES */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5
            }}
          >

            {/* FEATURE 1 */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: 'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                📝
              </Box>

              <Typography>
                Organize your notes easily
              </Typography>

            </Box>


            {/* FEATURE 2 */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: 'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                🔎
              </Box>

              <Typography>
                Find your notes quickly
              </Typography>

            </Box>


            {/* FEATURE 3 */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: 'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                ✨
              </Box>

              <Typography>
                Keep everything organized
              </Typography>

            </Box>

          </Box>

        </Box>


        {/* RIGHT SIDE */}

        <Box
          sx={{
            width: { xs: '100%', md: '50%' },

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            p: { xs: 4, sm: 6, md: 7 },

            backgroundColor: 'background.paper',
            color: 'text.primary'
          }}
        >

          <Box
            sx={{
              width: '100%',
              maxWidth: '400px'
            }}
          >

            {/* TITLE */}

            <Typography
              sx={{
                fontSize: {
                  xs: '28px',
                  md: '32px'
                },

                fontWeight: 800,

                color: 'text.primary',

                mb: 1
              }}
            >
              Create Account
            </Typography>


            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '15px',
                mb: 3
              }}
            >
              Create your account to get started
            </Typography>


            {/* FULL NAME */}

            <Typography
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 1
              }}
            >
              Full Name
            </Typography>

            <TextField
              name="fullname"
              fullWidth
              placeholder="Enter your full name"

              value={registerData.fullname}

              onChange={handleChange}

              sx={{
                mb: 2,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'background.default',
                  color: 'text.primary'
                },

                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }}
            />


            {/* EMAIL */}

            <Typography
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 1
              }}
            >
              Email Address
            </Typography>

            <TextField
              name="email"
              fullWidth

              placeholder="Enter your email"

              type="email"

              value={registerData.email}

              onChange={handleChange}

              sx={{
                mb: 2,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'background.default',
                  color: 'text.primary'
                },

                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }}
            />


            {/* PASSWORD */}

            <Typography
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 1
              }}
            >
              Password
            </Typography>

            <TextField
              name="password"
              fullWidth

              placeholder="Create a password"

              type="password"

              value={registerData.password}

              onChange={handleChange}

              sx={{
                mb: 2,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'background.default',
                  color: 'text.primary'
                },

                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }}
            />


            {/* CONFIRM PASSWORD */}

            <Typography
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 1
              }}
            >
              Confirm Password
            </Typography>

            <TextField
              name="confirmpassword"
              fullWidth

              placeholder="Confirm your password"

              type="password"

              value={registerData.confirmpassword}

              onChange={handleChange}

              sx={{
                mb: 3,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: 'background.default',
                  color: 'text.primary'
                },

                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }}
            />


            {/* REGISTER BUTTON */}

            <Button
              onClick={handleregister}

              fullWidth

              variant="contained"

              sx={{
                py: 1.6,

                borderRadius: '12px',

                backgroundColor: '#0F766E',

                fontSize: '16px',
                fontWeight: 700,

                textTransform: 'none',

                boxShadow:
                  '0 8px 20px rgba(15,118,110,0.25)',

                '&:hover': {
                  backgroundColor: '#0B5F5A'
                }
              }}
            >
              Create Account
            </Button>


            {/* LOGIN LINK */}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                gap: 0.7,

                mt: 3
              }}
            >

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: '14px'
                }}
              >
                Already have an account?
              </Typography>


              <Typography
                component={Link}
                to="/login"

                sx={{
                  color: '#0F766E',

                  fontWeight: 700,

                  fontSize: '14px',

                  textDecoration: 'none',

                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Login
              </Typography>

            </Box>

          </Box>

        </Box>

      </Box>

    </Box>
  )
}

export default Register