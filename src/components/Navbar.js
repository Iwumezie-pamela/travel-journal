import React from 'react'



function Navbar() {
  return (
    <nav className="nav">
   
      <img
        src={`${process.env.PUBLIC_URL}/images/world.png`}
        alt=""
        className='nav-img'
      />
      <p className='nav-title'>my travel journal.</p>
    </nav>
  );
}

export default Navbar

