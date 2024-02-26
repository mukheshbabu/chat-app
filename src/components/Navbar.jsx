import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>Mukhesh Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/4355348/pexels-photo-4355348.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <span>Mukhesh</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
