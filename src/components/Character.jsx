import React from 'react'
import { useStore } from '../store/store'

const Character = () => {
  const { search, characters } = useStore();
  const searchList = !search ? characters :
    characters.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      {searchList.map((item) =>
        <div className="card" key={item.id}>
          <figure>
            <img src={item.image} alt="Avatar" />
          </figure>
          <div className="container">
            <h4><b>{item.name}</b></h4>
            <p>Especie: {item.species}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Character