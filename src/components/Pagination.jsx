import React from 'react'
import { useStore } from '../store/store';

const Pagination = () => {
  const { info, setCharacters } = useStore();
  const handlePrev = () => {
    setCharacters(info.prev);
  }
  const handleNext = () => {
    setCharacters(info.next);
  }
  return (
    <div className='container-pagination'>
      {info.prev ?
        <button className='prev' onClick={handlePrev}>Anterior</button> : null
      }
      {info.next ?
        <button className='next' onClick={handleNext}>Siguiente</button> : null
      }
    </div>
  )
}

export default Pagination