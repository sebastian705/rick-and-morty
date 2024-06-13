import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Character from './components/Character';
import Pagination from './components/Pagination';
import { useStore } from './store/store';

const App = () => {
  const { setCharacters } = useStore();
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    setCharacters(url);
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <Pagination />
        <section>
          <Character />
        </section>
      </main>
    </>
  )
}

export default App