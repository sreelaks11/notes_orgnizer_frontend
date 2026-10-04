import React, { useEffect, useState } from 'react'
import { Box, Typography, Paper, Chip, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { deleteAPI, getnotesAPI } from '../Services/apiservices'
import { RiDeleteBinLine } from "react-icons/ri"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { FaFileDownload } from "react-icons/fa"


function Notes() {

  const navigate = useNavigate()


  // GET NOTES

  const [getnotes, setgetnotes] = useState([])


  const viewnotes = async () => {

    try {

      const res = await getnotesAPI()

      console.log(res.data)

      setgetnotes(res.data)

    }
    catch (err) {

      console.log(err)

    }

  }


  useEffect(() => {

    viewnotes()

  }, [])


  // SEARCH

  const [search, setsearch] = useState("")


  // DELETE

  const handledelete = async (id) => {

    try {

      const res = await deleteAPI(id)

      console.log(res)

      viewnotes()

    }
    catch (err) {

      console.log(err)

    }

  }


  // DOWNLOAD

  const downloadNote = async (item) => {

    try {

      const note =
        document.getElementById(`note-${item.id}`)


      const canvas =
        await html2canvas(note)


      const imgData =
        canvas.toDataURL('image/png')


      const pdf =
        new jsPDF('p', 'mm', 'a4')


      const pdfWidth =
        pdf.internal.pageSize.getWidth()


      const pdfHeight =
        (canvas.height * pdfWidth) /
        canvas.width


      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        pdfWidth,
        pdfHeight
      )


      pdf.save(`${item.title}.pdf`)

    }
    catch (err) {

      console.log(err)

    }

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
      {/* HEADER */}
      {/* ================================================= */}


      <Box
        sx={{
          maxWidth: '1450px',

          mx: 'auto',

          mb: 4
        }}
      >

        <Button
          startIcon={
            <ArrowBackIcon />
          }

          onClick={() =>
            navigate('/dashboard')
          }

          sx={{
            mt: 3,

            mb: 1,

            color: '#0F766E',

            textTransform: 'none',

            fontWeight: 600,

            fontSize: '14px',

            borderRadius: '9px',

            '&:hover': {
              backgroundColor:
                'action.hover'
            }
          }}
        >
          Back to Dashboard
        </Button>


        <Typography
          sx={{
            fontSize: {
              xs: '28px',
              sm: '32px',
              md: '38px'
            },

            fontWeight: 800,

            color:
              'text.primary'
          }}
        >
          All Notes
        </Typography>


        <Typography
          sx={{
            color:
              'text.secondary',

            mt: 0.5,

            fontSize: '14px'
          }}
        >
          View all your created notes
        </Typography>

      </Box>


      {/* ================================================= */}
      {/* SEARCH */}
      {/* ================================================= */}


      <Box
        sx={{
          maxWidth: '1450px',

          mx: 'auto',

          mb: 4
        }}
      >

        <Box
          sx={{
            position: 'relative',

            width: '100%',

            maxWidth: '650px',

            '&:hover .search-input': {
              borderColor: '#0F766E',

              boxShadow:
                '0 8px 20px rgba(15,118,110,0.12)'
            }
          }}
        >


          {/* SEARCH ICON */}


          <Box
            sx={{
              position: 'absolute',

              left: '18px',

              top: '50%',

              transform:
                'translateY(-50%)',

              color: '#0F766E',

              fontSize: '20px',

              zIndex: 1
            }}
          >
            🔍
          </Box>


          {/* SEARCH INPUT */}


          <input
            value={search}

            onChange={(e) =>
              setsearch(e.target.value)
            }

            type="text"

            placeholder="Search notes by title..."

            className="search-input"

            style={{
              width: '100%',

              height: '55px',

              padding:
                '0 20px 0 50px',

              borderRadius: '14px',

              border:
                '1px solid #DDE7E7',

              outline: 'none',

              backgroundColor:
                'transparent',

              color: 'inherit',

              fontSize: '14px',

              fontWeight: 500,

              boxSizing: 'border-box',

              transition:
                'all 0.3s ease'
            }}
          />

        </Box>

      </Box>


      {/* ================================================= */}
      {/* NOTES GRID */}
      {/* ================================================= */}


      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',

          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)'
          },

          gap: {
            xs: 3,
            sm: 3,
            md: 4,
            lg: 25
          }
        }}
      >


        {/* ================================================= */}
        {/* NOTE CARDS */}
        {/* ================================================= */}


        {getnotes

          .filter((item) =>
            item.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
          )

          .map((item, index) => (

            <Paper

              id={`note-${item.id}`}

              key={item.id}

              elevation={0}

              sx={{
                position: 'relative',

                /* BIGGER PADDING */

                p: {
                  xs: 3,

                  sm: 4,

                  md: 4.5
                },

                borderRadius: '22px',

                /* BIGGER HEIGHT */

                minHeight: {
                  xs: '420px',

                  sm: '460px',

                  md: '500px',

                  lg: '520px'
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
                    '0 20px 40px rgba(15,118,110,0.20)'
                },


                /* TOP GREEN LINE */

                '&::before': {

                  content: '""',

                  position:
                    'absolute',

                  top: 0,

                  left: 0,

                  width: '100%',

                  height: '6px',

                  backgroundColor:
                    '#0F766E'
                }
              }}
            >


              {/* ================================================= */}
              {/* TOP ROW */}
              {/* ================================================= */}


              <Box
                sx={{
                  display: 'flex',

                  justifyContent:
                    'space-between',

                  alignItems:
                    'center',

                  mb: 3
                }}
              >


                {/* NOTE ICON */}


                <Box
                  sx={{
                    width: {
                      xs: '50px',

                      md: '58px'
                    },

                    height: {
                      xs: '50px',

                      md: '58px'
                    },

                    borderRadius:
                      '15px',

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
                      '23px',

                    boxShadow:
                      '0 7px 16px rgba(15,118,110,0.20)'
                  }}
                >
                  📝
                </Box>


                {/* DATE + ACTIONS */}


                <Box
                  sx={{
                    display: 'flex',

                    alignItems:
                      'center',

                    gap: {
                      xs: 1.5,

                      sm: 2
                    }
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: {
                        xs: '11px',

                        sm: '12px'
                      },

                      color:
                        'text.secondary',

                      fontWeight: 600
                    }}
                  >
                    {item.formatedDate}
                  </Typography>


                  {/* DELETE */}


                  <RiDeleteBinLine

                    onClick={() =>
                      handledelete(
                        item.id
                      )
                    }

                    size={23}

                    color="currentColor"

                    style={{
                      cursor:
                        'pointer'
                    }}
                  />


                  {/* DOWNLOAD */}


                  <FaFileDownload

                    onClick={() =>
                      downloadNote(item)
                    }

                    style={{
                      fontSize:
                        '23px',

                      color:
                        '#0F766E',

                      cursor:
                        'pointer'
                    }}
                  />

                </Box>

              </Box>


              {/* ================================================= */}
              {/* BIG GREEN TITLE */}
              {/* ================================================= */}


              <Box
                sx={{
                  mb: 3,

                  p: {
                    xs: 2.5,

                    sm: 3,

                    md: 3
                  },

                  borderRadius:
                    '17px',

                  background:
                    'linear-gradient(135deg, #0B132B 0%, #14213D 55%, #0F766E 100%)',

                  boxShadow:
                    '0 10px 22px rgba(15,118,110,0.22)'
                }}
              >

                <Typography
                  sx={{
                    fontSize: {
                      xs: '23px',

                      sm: '27px',

                      md: '30px'
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


              {/* ================================================= */}
              {/* CATEGORY */}
              {/* ================================================= */}


              <Chip

                label={
                  item.category
                }

                size="small"

                sx={{
                  alignSelf:
                    'flex-start',

                  /* CATEGORY MADE BIGGER */

                  height: '40px',

                  px: 1,

                  backgroundColor:
                    '#E6FFFB',

                  color:
                    '#0F766E',

                  fontSize:
                    '16px',

                  fontWeight: 700,

                  borderRadius:
                    '10px',

                  mb: 2.5
                }}
              />


              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}


              <Typography
                sx={{
                  color:
                    'text.secondary',

                  fontSize: {
                    xs: '14px',

                    sm: '15px',

                    md: '16px'
                  },

                  lineHeight: 1.8,

                  mb: 2.5,

                  display:
                    '-webkit-box',

                  WebkitLineClamp: 6,

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


              {/* ================================================= */}
              {/* TAGS */}
              {/* ================================================= */}


              <Box
                sx={{
                  display: 'flex',

                  flexWrap: 'wrap',

                  gap: 1,

                  mb: 2.5
                }}
              >

                {Array.isArray(
                  item.tag
                ) &&

                  item.tag.map(
                    (tag, index) => (

                      <Chip

                        key={index}

                        label={tag}

                        size="small"

                        sx={{
                          /* TAGS MADE BIGGER */

                          height:
                            '36px',

                          backgroundColor:
                            '#E0F2FE',

                          color:
                            '#0369A1',

                          fontSize:
                            '14px',

                          fontWeight: 700,

                          borderRadius:
                            '10px',

                          px: 0.8
                        }}
                      />

                    )
                  )
                }

              </Box>


              {/* ================================================= */}
              {/* BOTTOM */}
              {/* ================================================= */}


              <Box
                sx={{
                  borderTop:
                    '1px solid',

                  borderColor:
                    'divider',

                  pt: 2,

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

          ))
        }

      </Box>


      {/* BACK BUTTON CONTAINER */}


      <Box
        sx={{
          maxWidth: '1450px',

          mx: 'auto'
        }}
      >
      </Box>

    </Box>
  )
}


export default Notes
