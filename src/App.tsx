import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { About } from './pages/About'
import { Link } from 'react-router-dom';
export const App = () => {

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact-us'>Contact Us</Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
    </>
  )
}
