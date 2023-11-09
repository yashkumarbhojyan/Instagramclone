import React from 'react';
import Login from './components/Login';
import "./styles/app.css"
import Register from './components/Register';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className='App'>
      <Profile/>
      {/* <Login/> */}
      {/* <div style={{ height:"100vh",display:"flex", alignItem:"center"}}>
        <Register/>
      </div> */}
      {/* <Home/> */}
      
    </div>
  )
}

export default App
