import React, { useState, useEffect } from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'
import { getnotesAPI } from '../Services/apiservices'

function Calendar() {

  const [selectedDate, setselectedDate] = useState(null)
  const [notes, setNotes] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())


  /* ================= GET NOTES ================= */

  useEffect(() => {
    getAllNotes()
  }, [])


  const getAllNotes = async () => {

    try {

      const res = await getnotesAPI()

      setNotes(res.data)

    }
    catch (err) {

      console.log(err)

    }

  }


  /* ================= DATE VALUES ================= */

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthName = currentDate.toLocaleString(
    'default',
    {
      month: 'long'
    }
  )

  const daysInMonth =
    new Date(year, month + 1, 0).getDate()

  const firstDay =
    new Date(year, month, 1).getDay()


  /* ================= PREVIOUS MONTH ================= */

  const previousMonth = () => {

    setCurrentDate(
      new Date(year, month - 1, 1)
    )

    setselectedDate(null)

  }


  /* ================= NEXT MONTH ================= */

  const nextMonth = () => {

    setCurrentDate(
      new Date(year, month + 1, 1)
    )

    setselectedDate(null)

  }


  /* ================= DATE FORMAT ================= */

  const formatDate = (date) => {

    return `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`

  }


  /* ================= TODAY ================= */

  const today = formatDate(new Date())


  /* ================= SELECTED NOTES ================= */

  const selectedNotes = notes.filter(
    item => item.taskDate === selectedDate
  )


  /* ================= CHECK NOTES ================= */

  const hasNotes = (day) => {

    const date =
      new Date(year, month, day)

    const formattedDate =
      formatDate(date)

    return notes.some(
      item => item.taskDate === formattedDate
    )

  }


  return (

    <Box
      sx={{
        minHeight: '100vh',

        backgroundColor:
          'background.default',

        color:
          'text.primary',

        p: {
          xs: 2,
          sm: 3,
          md: 4
        }
      }}
    >


      {/* ================================================= */}
      {/* PAGE HEADER */}
      {/* ================================================= */}

      <Box
        sx={{
          maxWidth: '1400px',

          mx: 'auto',

          mb: 5
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

            color:
              'text.primary',

            letterSpacing: '-0.5px'
          }}
        >
          Notes Calendar
        </Typography>


        <Typography
          sx={{
            mt: 1,

            fontSize: '15px',

            color:
              'text.secondary'
          }}
        >
          Organize and view your notes by date
        </Typography>

      </Box>


      {/* ================================================= */}
      {/* CALENDAR */}
      {/* ================================================= */}

      <Paper
        elevation={0}
        sx={{
          maxWidth: '700px',

          mx: 'auto',

          overflow: 'hidden',

          borderRadius: '24px',

          border: '1px solid',

          borderColor:
            'divider',

          backgroundColor:
            'background.paper',

          boxShadow:
            '0 15px 40px rgba(11,19,43,0.10)'
        }}
      >


        {/* ================================================= */}
        {/* CALENDAR HEADER */}
        {/* ================================================= */}

        <Box
          sx={{
            background:
              'linear-gradient(135deg, #0B132B 0%, #14213D 50%, #0F766E 100%)',

            color: 'white',

            px: {
              xs: 2,
              sm: 3,
              md: 4
            },

            py: {
              xs: 2.5,
              sm: 3
            }
          }}
        >

          <Box
            sx={{
              display: 'flex',

              justifyContent:
                'space-between',

              alignItems: 'center'
            }}
          >


            {/* PREVIOUS */}

            <Button
              onClick={previousMonth}
              sx={{
                minWidth: {
                  xs: '42px',
                  sm: '48px'
                },

                width: {
                  xs: '42px',
                  sm: '48px'
                },

                height: {
                  xs: '42px',
                  sm: '48px'
                },

                borderRadius: '14px',

                color: 'white',

                backgroundColor:
                  'rgba(255,255,255,0.10)',

                fontSize: '25px',

                transition:
                  'all 0.3s ease',

                '&:hover': {
                  backgroundColor:
                    'rgba(255,255,255,0.20)',

                  transform:
                    'translateX(-3px)'
                }
              }}
            >
              ←
            </Button>


            {/* MONTH */}

            <Box
              sx={{
                textAlign: 'center'
              }}
            >

              <Typography
                sx={{
                  fontSize: {
                    xs: '21px',
                    sm: '25px',
                    md: '28px'
                  },

                  fontWeight: 800,

                  color: 'white'
                }}
              >
                {monthName}
              </Typography>


              <Typography
                sx={{
                  mt: 0.3,

                  fontSize: {
                    xs: '13px',
                    sm: '14px'
                  },

                  color:
                    'rgba(255,255,255,0.75)',

                  fontWeight: 500
                }}
              >
                {year}
              </Typography>

            </Box>


            {/* NEXT */}

            <Button
              onClick={nextMonth}
              sx={{
                minWidth: {
                  xs: '42px',
                  sm: '48px'
                },

                width: {
                  xs: '42px',
                  sm: '48px'
                },

                height: {
                  xs: '42px',
                  sm: '48px'
                },

                borderRadius: '14px',

                color: 'white',

                backgroundColor:
                  'rgba(255,255,255,0.10)',

                fontSize: '25px',

                transition:
                  'all 0.3s ease',

                '&:hover': {
                  backgroundColor:
                    'rgba(255,255,255,0.20)',

                  transform:
                    'translateX(3px)'
                }
              }}
            >
              →
            </Button>

          </Box>

        </Box>


        {/* ================================================= */}
        {/* CALENDAR BODY */}
        {/* ================================================= */}

        <Box
          sx={{
            p: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >


          {/* WEEK DAYS */}

          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns:
                'repeat(7, 1fr)',

              gap: {
                xs: 0.5,
                sm: 1
              },

              mb: 2
            }}
          >

            {[
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat'
            ].map((day, index) => (

              <Box
                key={day}
                sx={{
                  textAlign: 'center',

                  py: 1
                }}
              >

                <Typography
                  sx={{
                    fontSize: {
                      xs: '10px',
                      sm: '12px',
                      md: '13px'
                    },

                    fontWeight: 800,

                    color:
                      index === 0
                        ? '#0F766E'
                        : 'text.secondary',

                    textTransform:
                      'uppercase',

                    letterSpacing:
                      '0.5px'
                  }}
                >
                  {day}
                </Typography>

              </Box>

            ))}

          </Box>


          {/* DATES */}

          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns:
                'repeat(7, 1fr)',

              gap: {
                xs: 0.7,
                sm: 1.2,
                md: 1.5
              }
            }}
          >


            {/* EMPTY DAYS */}

            {Array.from({
              length: firstDay
            }).map((_, index) => (

              <Box
                key={`empty-${index}`}
                sx={{
                  height: {
                    xs: '45px',
                    sm: '52px',
                    md: '58px'
                  }
                }}
              />

            ))}


            {/* CALENDAR DAYS */}

            {Array.from({
              length: daysInMonth
            }).map((_, index) => {

              const day = index + 1

              const date =
                new Date(year, month, day)

              const formattedDate =
                formatDate(date)

              const isSelected =
                selectedDate === formattedDate

              const isToday =
                today === formattedDate

              const noteExists =
                hasNotes(day)


              return (

                <Box
                  key={day}
                  sx={{
                    display: 'flex',

                    justifyContent:
                      'center',

                    alignItems:
                      'center',

                    height: {
                      xs: '45px',
                      sm: '52px',
                      md: '58px'
                    }
                  }}
                >

                  <Button
                    onClick={() => {
                      setselectedDate(
                        formattedDate
                      )
                    }}

                    sx={{
                      minWidth: {
                        xs: '38px',
                        sm: '44px',
                        md: '48px'
                      },

                      width: {
                        xs: '38px',
                        sm: '44px',
                        md: '48px'
                      },

                      height: {
                        xs: '38px',
                        sm: '44px',
                        md: '48px'
                      },

                      borderRadius: '15px',

                      position: 'relative',

                      color:
                        isSelected
                          ? 'white'
                          : 'text.primary',

                      backgroundColor:
                        isSelected
                          ? '#0F766E'
                          : 'transparent',

                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '15px'
                      },

                      fontWeight:
                        isToday || isSelected
                          ? 800
                          : 500,

                      transition:
                        'all 0.25s ease',

                      boxShadow:
                        isSelected
                          ? '0 6px 15px rgba(15,118,110,0.30)'
                          : 'none',

                      border:
                        isToday && !isSelected
                          ? '2px solid #0F766E'
                          : '2px solid transparent',

                      '&:hover': {
                        backgroundColor:
                          isSelected
                            ? '#0F766E'
                            : 'action.hover',

                        transform:
                          'translateY(-3px)'
                      },

                      /* NOTE DOT */

                      '&::after': {
                        content: '""',

                        width: noteExists
                          ? '6px'
                          : '0px',

                        height: noteExists
                          ? '6px'
                          : '0px',

                        backgroundColor:
                          isSelected
                            ? 'white'
                            : '#0F766E',

                        borderRadius:
                          '50%',

                        position:
                          'absolute',

                        bottom: '3px',

                        left: '50%',

                        transform:
                          'translateX(-50%)',

                        transition:
                          'all 0.2s ease'
                      }
                    }}
                  >
                    {day}
                  </Button>

                </Box>

              )

            })}

          </Box>


          {/* ================================================= */}
          {/* LEGEND */}
          {/* ================================================= */}

          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',

              gap: 2,

              mt: 3,

              pt: 2,

              borderTop:
                '1px solid',

              borderColor:
                'divider'
            }}
          >

            <Box
              sx={{
                display: 'flex',

                alignItems: 'center',

                gap: 0.8
              }}
            >

              <Box
                sx={{
                  width: '8px',

                  height: '8px',

                  borderRadius: '50%',

                  backgroundColor:
                    '#0F766E'
                }}
              />

              <Typography
                sx={{
                  fontSize: '11px',

                  color:
                    'text.secondary'
                }}
              >
                Notes available
              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',

                alignItems: 'center',

                gap: 0.8
              }}
            >

              <Box
                sx={{
                  width: '13px',

                  height: '13px',

                  borderRadius: '4px',

                  border:
                    '2px solid #0F766E'
                }}
              />

              <Typography
                sx={{
                  fontSize: '11px',

                  color:
                    'text.secondary'
                }}
              >
                Today
              </Typography>

            </Box>

          </Box>

        </Box>

      </Paper>


      {/* ================================================= */}
      {/* SELECTED DATE NOTES */}
      {/* ================================================= */}

      {selectedDate && (

        <Box
          sx={{
            maxWidth: '1400px',

            mx: 'auto',

            mt: 5
          }}
        >

          <Typography
            sx={{
              fontSize: {
                xs: '24px',
                sm: '28px',
                md: '32px'
              },

              fontWeight: 800,

              color:
                'text.primary',

              mb: 3
            }}
          >
            Notes for {selectedDate}
          </Typography>


          {selectedNotes.length > 0 ? (

            <Box
              sx={{
                display: 'grid',

                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)'
                },

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 3.5
                }
              }}
            >

              {selectedNotes.map((item) => (

                <Paper
                  key={item.id}

                  elevation={0}

                  sx={{
                    position: 'relative',

                    p: {
                      xs: 3,
                      sm: 3.5,
                      md: 4
                    },

                    borderRadius: '20px',

                    minHeight: {
                      xs: '380px',
                      sm: '410px',
                      md: '440px',
                      lg: '460px'
                    },

                    border:
                      '1px solid',

                    borderColor:
                      'divider',

                    backgroundColor:
                      'background.paper',

                    color:
                      'text.primary',

                    overflow:
                      'hidden',

                    display:
                      'flex',

                    flexDirection:
                      'column',

                    transition:
                      'all 0.3s ease',

                    '&:hover': {
                      transform:
                        'translateY(-8px)',

                      boxShadow:
                        '0 18px 35px rgba(15,118,110,0.20)'
                    },

                    '&::before': {
                      content: '""',

                      position:
                        'absolute',

                      top: 0,

                      left: 0,

                      width: '100%',

                      height: '7px',

                      backgroundColor:
                        '#0F766E'
                    }
                  }}
                >


                  {/* TOP ROW */}

                  <Box
                    sx={{
                      display: 'flex',

                      justifyContent:
                        'space-between',

                      alignItems:
                        'center',

                      mb: 2.5
                    }}
                  >

                    <Box
                      sx={{
                        width: {
                          xs: '48px',
                          md: '55px'
                        },

                        height: {
                          xs: '48px',
                          md: '55px'
                        },

                        borderRadius:
                          '13px',

                        display:
                          'flex',

                        alignItems:
                          'center',

                        justifyContent:
                          'center',

                        backgroundColor:
                          '#0F766E',

                        color: 'white',

                        fontSize:
                          '22px'
                      }}
                    >
                      📝
                    </Box>


                    <Typography
                      sx={{
                        fontSize: '12px',

                        color:
                          'text.secondary',

                        fontWeight: 600
                      }}
                    >
                      {item.formatedDate}
                    </Typography>

                  </Box>


                  {/* GREEN TITLE */}

                  <Box
                    sx={{
                      mb: 2.5,

                      p: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5
                      },

                      borderRadius:
                        '15px',

                      backgroundColor:
                        '#0F766E',

                      boxShadow:
                        '0 8px 18px rgba(15,118,110,0.20)'
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: {
                          xs: '22px',
                          sm: '25px',
                          md: '28px'
                        },

                        fontWeight: 800,

                        color: 'white',

                        lineHeight: 1.35,

                        display:
                          '-webkit-box',

                        WebkitLineClamp: 2,

                        WebkitBoxOrient:
                          'vertical',

                        overflow:
                          'hidden',

                        wordBreak:
                          'break-word'
                      }}
                    >
                      {item.title}
                    </Typography>

                  </Box>


                  {/* CATEGORY */}

                  <Box
                    sx={{
                      display:
                        'inline-flex',

                      alignSelf:
                        'flex-start',

                      px: 1.5,

                      py: 0.7,

                      borderRadius:
                        '8px',

                      backgroundColor:
                        '#E6FFFB',

                      color:
                        '#0F766E',

                      fontSize:
                        '12px',

                      fontWeight: 700,

                      mb: 2
                    }}
                  >
                    {item.category}
                  </Box>


                  {/* CONTENT */}

                  <Typography
                    sx={{
                      color:
                        'text.secondary',

                      fontSize: {
                        xs: '14px',
                        sm: '15px',
                        md: '16px'
                      },

                      lineHeight: 1.7,

                      mb: 2,

                      display:
                        '-webkit-box',

                      WebkitLineClamp: 5,

                      WebkitBoxOrient:
                        'vertical',

                      overflow:
                        'hidden',

                      wordBreak:
                        'break-word'
                    }}
                  >
                    {item.content}
                  </Typography>


                  {/* TAGS */}

                  <Box
                    sx={{
                      display: 'flex',

                      flexWrap: 'wrap',

                      gap: 0.8,

                      mb: 2
                    }}
                  >

                    {Array.isArray(item.tag) &&
                      item.tag.map(
                        (tag, index) => (

                          <Box
                            key={index}

                            sx={{
                              px: 1.5,

                              py: 0.6,

                              borderRadius:
                                '20px',

                              backgroundColor:
                                '#E0F2FE',

                              color:
                                '#0369A1',

                              fontSize:
                                '11px',

                              fontWeight: 700
                            }}
                          >
                            {tag}
                          </Box>

                        )
                      )
                    }

                  </Box>


                  {/* BOTTOM */}

                  <Box
                    sx={{
                      borderTop:
                        '1px solid',

                      borderColor:
                        'divider',

                      pt: 1.8,

                      mt: 'auto',

                      display: 'flex',

                      justifyContent:
                        'space-between',

                      alignItems:
                        'center'
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize:
                          '11px',

                        color:
                          'text.secondary',

                        fontWeight: 600
                      }}
                    >
                      Created note
                    </Typography>


                    <Typography
                      sx={{
                        fontSize:
                          '11px',

                        color:
                          '#0F766E',

                        fontWeight: 700
                      }}
                    >
                      Notes Organizer
                    </Typography>

                  </Box>

                </Paper>

              ))}

            </Box>

          ) : (

            <Box
              sx={{
                textAlign: 'center',

                py: 6
              }}
            >

              <Typography
                sx={{
                  fontSize: '15px',

                  color:
                    'text.secondary'
                }}
              >
                No notes created on this date.
              </Typography>

            </Box>

          )}

        </Box>

      )}

    </Box>
  )
}

export default Calendar

