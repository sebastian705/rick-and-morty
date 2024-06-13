import React, { useState } from 'react'
import { useStore } from '../store/store';

const NavBar = () => {
  const { setSearch, search } = useStore();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <header>
      <div className='nav-title'>
        <h2>Rick and Morty</h2>
      </div>
      <nav className='navbar'>
        <input type="search" onChange={handleSearch}
          className='input-search' placeholder='Buscar'
          value={search} />
      </nav>
    </header>
  )
}

export default NavBar