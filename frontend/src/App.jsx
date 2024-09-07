import React from 'react'
import { Route, Routes } from "react-router-dom"
import './index.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'



function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <>
    <div className='App'>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}/>
        {isUserSignedIn && <Route path='/admin' element={<Admin/>}/>}
      </Routes>
    </div>
    </>
  )
}

export default App
