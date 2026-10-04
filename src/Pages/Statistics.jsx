import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    Paper,
    Button
} from '@mui/material'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { getnotesAPI } from '../Services/apiservices'


function Statistics() {

    const navigate = useNavigate()

    const [notes, setNotes] = useState([])


    // GET NOTES
    const getNotes = async () => {

        try {

            const res = await getnotesAPI()

            setNotes(res.data)

        }
        catch (err) {

            console.log(err)

        }

    }


    useEffect(() => {

        getNotes()

    }, [])


    // CATEGORY COUNT
    const categoryCount = {}

    notes.forEach((note) => {

        const category = note.category || 'Other'

        if (categoryCount[category]) {

            categoryCount[category]++

        }
        else {

            categoryCount[category] = 1

        }

    })


    // CHART DATA
    const chartData = Object.keys(categoryCount).map((category) => ({

        category: category,

        notes: categoryCount[category]

    }))


    // PIE CHART DATA
    const pieData = Object.keys(categoryCount).map((category, index) => ({

        name: category,

        value: categoryCount[category],

        id: index

    }))


    const COLORS = [
        '#0F766E',
        '#14B8A6',
        '#0B132B',
        '#2563EB',
        '#8B5CF6',
        '#F59E0B'
    ]


    return (

        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                color: 'text.primary',
                px: { xs: 2, sm: 3, md: 5 },
                py: { xs: 2, md: 4 }
            }}
        >

            {/* BACK BUTTON */}

            <Button
                onClick={() => navigate('/dashboard')}
                startIcon={<ArrowBackIcon />}
                sx={{
                    color: '#0F766E',
                    fontWeight: 600,
                    textTransform: 'none',
                    mb: 2,

                    '&:hover': {
                        backgroundColor: 'action.hover'
                    }
                }}
            >
                Back to Dashboard
            </Button>


            {/* TITLE */}

            <Typography
                sx={{
                    fontSize: {
                        xs: '28px',
                        sm: '34px',
                        md: '40px'
                    },

                    fontWeight: 800,
                    color: 'text.primary',
                    mb: 1
                }}
            >
                Statistics
            </Typography>


            <Typography
                sx={{
                    color: 'text.secondary',
                    mb: 4
                }}
            >
                View your notes statistics and category analysis
            </Typography>


            {/* STAT CARDS */}

            <Box
                sx={{
                    display: 'grid',

                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)'
                    },

                    gap: 3,
                    mb: 4
                }}
            >

                {/* TOTAL NOTES */}

                <Paper
                    sx={{
                        p: 3,
                        borderRadius: '18px',
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            color: 'text.secondary',
                            mb: 1
                        }}
                    >
                        Total Notes
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '32px',
                            fontWeight: 800,
                            color: '#0F766E'
                        }}
                    >
                        {notes.length}
                    </Typography>

                </Paper>


                {/* TOTAL CATEGORIES */}

                <Paper
                    sx={{
                        p: 3,
                        borderRadius: '18px',
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            color: 'text.secondary',
                            mb: 1
                        }}
                    >
                        Total Categories
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '32px',
                            fontWeight: 800,
                            color: '#0F766E'
                        }}
                    >
                        {Object.keys(categoryCount).length}
                    </Typography>

                </Paper>


                {/* MOST USED CATEGORY */}

                <Paper
                    sx={{
                        p: 3,
                        borderRadius: '18px',
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            color: 'text.secondary',
                            mb: 1
                        }}
                    >
                        Categories
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: '#0F766E'
                        }}
                    >
                        {Object.keys(categoryCount).join(', ') || 'No categories'}
                    </Typography>

                </Paper>

            </Box>


            {/* CHARTS */}

            <Box
                sx={{
                    display: 'grid',

                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: '1fr 1fr'
                    },

                    gap: 4
                }}
            >


                {/* BAR CHART */}

                <Paper
                    sx={{
                        p: {
                            xs: 2,
                            sm: 3
                        },

                        borderRadius: '20px',

                        backgroundColor: 'background.paper',

                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 3
                        }}
                    >
                        Notes by Category
                    </Typography>


                    {chartData.length > 0 ? (

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <BarChart
                                data={chartData}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                />

                                <XAxis
                                    dataKey="category"
                                />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="notes"
                                    fill="#0F766E"
                                    radius={[8, 8, 0, 0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    ) : (

                        <Typography
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center',
                                py: 10
                            }}
                        >
                            No notes available
                        </Typography>

                    )}

                </Paper>


                {/* PIE CHART */}

                <Paper
                    sx={{
                        p: {
                            xs: 2,
                            sm: 3
                        },

                        borderRadius: '20px',

                        backgroundColor: 'background.paper',

                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 3
                        }}
                    >
                        Category Distribution
                    </Typography>


                    {pieData.length > 0 ? (

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <PieChart>

                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label
                                >

                                    {pieData.map((entry) => (

                                        <Cell
                                            key={entry.id}
                                            fill={
                                                COLORS[
                                                    entry.id %
                                                    COLORS.length
                                                ]
                                            }
                                        />

                                    ))}

                                </Pie>

                                <Tooltip />

                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    ) : (

                        <Typography
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center',
                                py: 10
                            }}
                        >
                            No notes available
                        </Typography>

                    )}

                </Paper>

            </Box>

        </Box>

    )
}

export default Statistics