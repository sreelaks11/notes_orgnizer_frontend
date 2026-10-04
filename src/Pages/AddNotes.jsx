import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { editAPI, notesAPI } from '../Services/apiservices'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from "react-icons/fa"
import Modal from '@mui/material/Modal'
import { IoMdArrowBack } from "react-icons/io"
import { RxCross1 } from "react-icons/rx"

function AddNotes() {

  const navigate = useNavigate()

  const [addnotes, setaddnotes] = useState({
    title: "",
    content: "",
    category: "",
    tag: [],
    taskDate: ""
  })

  const notesonchange = (e) => {
    setaddnotes({
      ...addnotes,
      [e.target.name]: e.target.value
    })
  }

  const handlenotes = async (e) => {
    try {

      const newNote = {
        ...addnotes,
        formatedDate: new Date().toLocaleDateString()
      }

      const res = await notesAPI(newNote)

      console.log(res.data)

      alert("successfully added")

      setaddnotes(res.data)

    }
    catch (err) {
      console.log(err)
    }
  }


  // TAG
  const [addtag, setaddtag] = useState('')

  const handletag = () => {
    if (addtag) {
      setaddnotes({
        ...addnotes,
        tag: [...addnotes.tag, addtag]
      })

      setaddtag("")
    }
  }


  // MODAL
  const [open, setopen] = useState(false)


  // EDIT
  const handleupdate = async () => {
    try {

      const res = await editAPI(addnotes.id, addnotes)

      console.log(res.data)

      setaddnotes(res.data)

      setopen(false)

      alert("updated successfully")

    }
    catch (err) {
      console.log(err)
    }
  }


  // DELETE TAG
  const deletetag = (index) => {

    addnotes.tag.splice(index, 1)

    setaddnotes({
      ...addnotes
    })
  }


  return (

    <Box
      sx={{
        minHeight: '100vh',
        height: '100vh',
        overflow: { xs: 'auto', md: 'hidden' },

        backgroundColor: 'background.default',
        color: 'text.primary',

        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 2, md: 3 }
      }}
    >

      {/* HEADER */}

      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          mb: { xs: 2, md: 3 }
        }}
      >

        <Button
          onClick={() => navigate('/dashboard')}
          startIcon={<ArrowBackIcon />}
          sx={{
            color: '#0F766E',
            fontWeight: 600,
            textTransform: 'none',
            mb: 1,

            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}
        >
          Back to Dashboard
        </Button>


        <Typography
          sx={{
            fontSize: {
              xs: '28px',
              sm: '34px',
              md: '40px'
            },

            fontWeight: 800,

            color: 'text.primary'
          }}
        >
          Create New Note
        </Typography>

      </Box>


      {/* MAIN CONTENT */}

      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          pb: { xs: 5, md: 6 },
          height: {
            xs: 'auto',
            md: 'calc(100vh - 165px)'
          },

          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'row'
          },

          gap: {
            xs: 3,
            md: 4
          }

        }}
      >

        {/* LEFT SIDE */}

        <Paper
          elevation={0}
          sx={{
            width: {
              xs: '100%',
              md: '50%'
            },

            height: {
              xs: 'auto',
              md: '100%'
            },

            p: {
              xs: 3,
              sm: 4,
              md: 4
            },

            borderRadius: '22px',

            border: '1px solid',
            borderColor: 'divider',

            backgroundColor: 'background.paper',

            color: 'text.primary',

            boxShadow: '0 10px 30px rgba(11,19,43,0.06)',

            overflowY: {
              xs: 'visible',
              md: 'auto'
            }
          }}
        >

          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'text.primary',
              mb: 3
            }}
          >
            Note Details
          </Typography>


          {/* TITLE */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Title
          </Typography>

          <TextField
            onChange={notesonchange}
            name="title"
            value={addnotes.title}
            fullWidth
            placeholder="Enter note title"
            sx={{
              mb: 2.5,

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


          {/* CONTENT */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Content
          </Typography>

          <TextField
            onChange={notesonchange}
            name="content"
            value={addnotes.content}
            fullWidth
            multiline
            rows={4}
            placeholder="Write your note here..."
            sx={{
              mb: 1,

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


          {/* CATEGORY */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Category
          </Typography>


          <TextField
            onChange={notesonchange}
            name="category"
            value={addnotes.category}
            fullWidth
            placeholder="Example: Work, Personal, Study"
            sx={{
              mb: 2.5,

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


          {/* TAGS */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Tags
          </Typography>


          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mb: 3
            }}
          >

            <TextField
              onChange={(e) => setaddtag(e.target.value)}
              value={addtag}
              fullWidth
              placeholder="Example: React, JavaScript, Notes"
              sx={{
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

            <Button
              onClick={handletag}
              variant="contained"
              sx={{
                minWidth: '50px',
                borderRadius: '12px',
                backgroundColor: '#0F766E',
                fontSize: '20px',

                '&:hover': {
                  backgroundColor: '#0B5F5A'
                }
              }}
            >
              +
            </Button>


            <input
              type="date"
              name="taskDate"
              value={addnotes.taskDate}
              onChange={notesonchange}

              style={{
                backgroundColor: 'transparent',
                color: 'inherit',
                border: '1px solid',
                borderColor: 'inherit',
                borderRadius: '8px',
                padding: '5px'
              }}
            />

          </Box>


          {/* ADD BUTTON */}

          <Button
            onClick={handlenotes}
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              py: 1.6,
              borderRadius: '12px',
              backgroundColor: '#0F766E',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'none',

              boxShadow:
                '0 8px 20px rgba(15,118,110,0.20)',

              '&:hover': {
                backgroundColor: '#0B5F5A'
              }
            }}
          >
            Add Note
          </Button>

        </Paper>


        {/* RIGHT SIDE - PREVIEW */}

        <Box
          elevation={0}
          sx={{
            width: {
              xs: '100%',
              md: '50%'
            },

            p: 0,

            color: 'text.primary'
          }}
        >

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >

            <Typography
              sx={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'text.primary',
                mb: 3
              }}
            >
              Note Preview
            </Typography>


            <Typography
              sx={{
                mt: 1,
                ml: 20,
                fontSize: '15px',
                color: 'text.secondary'
              }}
            >
              {addnotes.formatedDate}
            </Typography>


            <FaEdit
              onClick={() => {
                setopen(true)
              }}

              style={{
                fontSize: '20px',
                color: '#0F766E',
                cursor: 'pointer',
                marginLeft: '5px'
              }}
            />

          </Box>


          {/* NOTE CARD */}

          <Box
            sx={{
              borderRadius: '18px',
              overflow: 'hidden',

              border: '1px solid',
              borderColor: 'divider',

              backgroundColor: 'background.default'
            }}
          >

            {/* NOTE HEADER */}

            <Box
              sx={{
                background:
                  'linear-gradient(135deg, #0B132B, #0F766E)',

                p: {
                  xs: 3,
                  sm: 4
                },

                color: 'white'
              }}
            >

              <Typography
                sx={{
                  fontSize: {
                    xs: '22px',
                    sm: '26px'
                  },

                  fontWeight: 800,

                  wordBreak: 'break-word'
                }}
              >
                {addnotes.title}
              </Typography>


              {/* CATEGORY - MADE BIGGER */}

              <Typography
                sx={{
                  mt: 1,
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#D6F5F2'
                }}
              >
                {addnotes.category}
              </Typography>

            </Box>


            {/* NOTE CONTENT */}

            <Box
              sx={{
                p: {
                  xs: 3,
                  sm: 4
                }
              }}
            >

              <Typography
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,

                  minHeight: '180px',

                  wordBreak: 'break-word',

                  whiteSpace: 'pre-line'
                }}
              >
                {addnotes.content}
              </Typography>


              <Divider
                sx={{
                  my: 3,
                  borderColor: 'divider'
                }}
              />


              {/* TAGS */}

              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  mb: 1
                }}
              >
                TAGS
              </Typography>


              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1
                }}
              >

                {addnotes.tag.map((item, index) => (

                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.9,

                      borderRadius: '20px',

                      backgroundColor: '#D6F5F2',

                      color: '#0F766E',

                      fontSize: '16px',

                      fontWeight: 600
                    }}
                  >
                    {item}
                  </Box>

                ))}

              </Box>

            </Box>

          </Box>

        </Box>

      </Box>


      {/* MODAL */}

      <Modal
        open={open}
        onClose={() => setopen(false)}
      >

        <Box
          sx={{
            position: 'absolute',

            top: '50%',
            left: '50%',

            transform:
              'translate(-50%, -50%)',

            width: {
              xs: '92%',
              sm: '70%',
              md: '50%'
            },

            maxWidth: '600px',

            maxHeight: '90vh',

            overflowY: 'auto',

            backgroundColor: 'background.paper',

            color: 'text.primary',

            borderRadius: '22px',

            p: {
              xs: 2.5,
              sm: 3,
              md: 4
            },

            border: '1px solid',
            borderColor: 'divider',

            boxShadow:
              '0 10px 30px rgba(11,19,43,0.15)'
          }}
        >


          {/* MODAL TITLE */}

          <Box
            sx={{
              display: "flex",
              gap: 2
            }}
          >

            <IoMdArrowBack
              onClick={() => setopen(false)}

              style={{
                fontSize: '25px',
                color: '#0F766E',
                cursor: 'pointer'
              }}
            />


            <Typography
              sx={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'text.primary',
                mb: 3
              }}
            >
              Edit Note
            </Typography>

          </Box>


          {/* TITLE */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Title
          </Typography>


          <TextField
            onChange={notesonchange}
            name="title"
            value={addnotes.title}
            fullWidth
            placeholder="Enter note title"

            sx={{
              mb: 2.5,

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


          {/* CONTENT */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Content
          </Typography>


          <TextField
            onChange={notesonchange}
            name="content"
            value={addnotes.content}
            fullWidth
            multiline
            rows={6}
            placeholder="Write your note here..."

            sx={{
              mb: 2.5,

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


          {/* CATEGORY */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Category
          </Typography>


          <TextField
            onChange={notesonchange}
            name="category"
            value={addnotes.category}
            fullWidth
            placeholder="Example: Work, Personal, Study"

            sx={{
              mb: 2.5,

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


          {/* TAGS */}

          <Typography
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1
            }}
          >
            Tags
          </Typography>


          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mb: 2
            }}
          >

            <TextField
              onChange={(e) => setaddtag(e.target.value)}
              value={addtag}
              fullWidth
              placeholder="Example: React, JavaScript, Notes"

              sx={{
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


            <Button
              onClick={handletag}
              variant="contained"

              sx={{
                minWidth: '50px',

                borderRadius: '12px',

                backgroundColor: '#0F766E',

                fontSize: '20px',

                '&:hover': {
                  backgroundColor: '#0B5F5A'
                }
              }}
            >
              +
            </Button>

          </Box>


          {/* EXISTING TAGS */}

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.7,
              mb: 3
            }}
          >

            {Array.isArray(addnotes.tag) &&
              addnotes.tag.map((tag, index) => (

                <Box
                  key={index}
                  sx={{
                    backgroundColor: '#E0F2FE',
                    color: '#0369A1',

                    px: 1.8,
                    py: 0.8,

                    borderRadius: '10px',

                    fontSize: '15px',
                    fontWeight: 600
                  }}
                >

                  <Button
                    sx={{
                      color: '#0369A1',
                      fontSize: '15px',
                      fontWeight: 600,
                      textTransform: 'none',
                      padding: 0,
                      minWidth: 'auto'
                    }}
                  >
                    {tag}

                    <RxCross1
                      onClick={() => deletetag(index)}
                      style={{
                        fontSize: '18px',
                        marginLeft: '8px',
                        color: '#0369A1'
                      }}
                    />

                  </Button>

                </Box>

              ))
            }

          </Box>


          {/* UPDATE BUTTON */}

          <Button
            onClick={handleupdate}

            fullWidth

            variant="contained"

            sx={{
              py: 1.5,

              borderRadius: '12px',

              backgroundColor: '#0F766E',

              fontSize: '16px',

              fontWeight: 700,

              textTransform: 'none',

              boxShadow:
                '0 8px 20px rgba(15,118,110,0.20)',

              '&:hover': {
                backgroundColor: '#0B5F5A'
              }
            }}
          >
            Update Note
          </Button>

        </Box>

      </Modal>

    </Box>
  )
}

export default AddNotes
