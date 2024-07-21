import React, { useState } from 'react'
import { useStore } from '../store/store';
import logo from "../img/rick-and-morty.png"

const NavBar = () => {
  const { setSearch, search } = useStore();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <header>
      <figure className='nav-logo'>
        <img src={logo} alt="rick-and-morty-logo" />
      </figure>
      <nav className='navbar'>
        <input type="search" onChange={handleSearch}
          className='input-search' placeholder='Buscar'
          value={search} />
      </nav>
    </header>
  )
}

export default NavBar