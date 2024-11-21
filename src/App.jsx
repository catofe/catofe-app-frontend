import React, {useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Profile from './Pages/Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Order' element={<Order />}/>
            <Route path='/Profile' element={<Profile />}/>
          </Routes>
        </div>
    </>
  )
}

export default App
