import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginAPI } from '../Services/apiservices'

function Login() {

  const navigate = useNavigate()

  const [loginData, setloginData] = useState({
    email: '',
    password: ""
  })


  const handleChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }


  const handlelogin = async (e) => {

    try {

      const res = await loginAPI(setloginData)

      const user = res.data.find(
        (item) =>
          item.email === loginData.email &&
          item.password === loginData.password
      )

     if (user) {

    alert('login successfully')

    console.log(user)

    sessionStorage.setItem(
        'user',
        JSON.stringify(user)
    )

    navigate('/dashboard')

}
      else {

        alert('invalid email or password')

      }

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

        px: {
          xs: 2,
          sm: 4
        },

        py: 4
      }}
    >


      <Box
        sx={{
          width: '100%',

          maxWidth: '1000px',

          minHeight: {
            xs: 'auto',
            md: '600px'
          },

          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'row'
          },

          borderRadius: '28px',

          overflow: 'hidden',

          backgroundColor: 'background.paper',

          boxShadow:
            '0 25px 60px rgba(0,0,0,0.35)'
        }}
      >


        {/* LEFT SIDE */}

        <Box
          sx={{
            width: {
              xs: '100%',
              md: '50%'
            },

            display: 'flex',

            flexDirection: 'column',

            justifyContent: 'center',

            p: {
              xs: 4,
              sm: 6,
              md: 7
            },

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
            Organize your thoughts, capture your ideas, and keep
            everything important in one simple place.
          </Typography>


          {/* FEATURES */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5
            }}
          >


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

                  backgroundColor:
                    'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                📝
              </Box>

              <Typography>
                Keep your notes organized
              </Typography>

            </Box>


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

                  backgroundColor:
                    'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                🔎
              </Box>

              <Typography>
                Find your notes quickly
              </Typography>

            </Box>


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

                  backgroundColor:
                    'rgba(255,255,255,0.12)',

                  fontSize: '20px'
                }}
              >
                ✨
              </Box>

              <Typography>
                Stay productive every day
              </Typography>

            </Box>


          </Box>

        </Box>


        {/* RIGHT SIDE */}

        <Box
          sx={{
            width: {
              xs: '100%',
              md: '50%'
            },

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            p: {
              xs: 4,
              sm: 6,
              md: 7
            },

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
              Welcome Back
            </Typography>


            <Typography
              sx={{
                color: 'text.secondary',

                fontSize: '15px',

                mb: 4
              }}
            >
              Login to continue to your notes
            </Typography>


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

              value={loginData.email}

              onChange={handleChange}

              sx={{
                mb: 2.5,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',

                  backgroundColor:
                    'background.default',

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

              placeholder="Enter your password"

              type="password"

              value={loginData.password}

              onChange={handleChange}

              sx={{
                mb: 3.5,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',

                  backgroundColor:
                    'background.default',

                  color: 'text.primary'
                },

                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',

                  opacity: 1
                }
              }}
            />


            {/* LOGIN BUTTON */}

            <Button
              onClick={handlelogin}

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
              Login
            </Button>


            {/* REGISTER */}

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
                Don't have an account?
              </Typography>


              <Typography
                component={Link}

                to="/register"

                sx={{
                  color: '#0F766E',

                  fontWeight: 700,

                  fontSize: '14px',

                  cursor: 'pointer',

                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Register
              </Typography>

            </Box>


          </Box>

        </Box>

      </Box>

    </Box>
  )
}

export default Login