import React, { createContext, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {

    const [darkMode, setDarkMode] = useState(
        sessionStorage.getItem('theme') === 'dark'
    )

    const toggleTheme = () => {
        setDarkMode(prev => {
            const newMode = !prev

            sessionStorage.setItem(
                'theme',
                newMode ? 'dark' : 'light'
            )

            return newMode
        })
    }

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',

            background: {
                default: darkMode ? '#0B132B' : '#F8FAFC',
                paper: darkMode ? '#14213D' : '#FFFFFF'
            },

            text: {
                primary: darkMode ? '#FFFFFF' : '#0B132B',
                secondary: darkMode ? '#CBD5E1' : '#64748B'
            }
        }
    })

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}