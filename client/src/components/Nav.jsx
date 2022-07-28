import {Link} from 'react-router-dom'

import React from 'react'

const Nav = () => {
return (
      <header>
        <nav className='navSpace'>
          <Link to=''>Home</Link>
          <Link to='/mangas'>Manga</Link>
          <Link to='/authors'>Authors</Link>
          <Link to='/reviews'>Reviews</Link>
        </nav>
      </header>
    )

  }


export default Nav 