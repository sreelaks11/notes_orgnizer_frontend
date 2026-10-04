
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Notfound from './Pages/Notfound'
import Dashboard from './Pages/Dashboard'
import AddNotes from './Pages/AddNotes'
import Notes from './Pages/Notes' 
import Calendar from './Pages/Calendar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Statistics from './Pages/Statistics'

function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/Notes" element={<Notes />} />

      <Route path="/AddNotes" element={<AddNotes />} />

      <Route path="/calendar" element={<Calendar />} />

      <Route path="/statistics" element={<Statistics />} />
      
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
