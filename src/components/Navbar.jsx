import React from 'react'
import bookmark from '../gif/bookmark.gif'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={bookmark} className="gif"/>
        <p className='nav-title'>Wordictionary</p>
    </div>
  )
}

export default Navbar