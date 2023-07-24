import React, { useEffect, useState }from 'react'
import { Card } from '../components'

const Default = ({handleDetailsPage, bookmarks, pokemons, lastPokemonRef, handleLike}) => {
  return (
    <div> 
      { pokemons.map((p, index) => {
        if (pokemons.length === index+1) {
          return (
            <div className='inline-block col col-3 p-10' key={index} ref={lastPokemonRef}>
              <Card handleDetailsPage={handleDetailsPage} handleLike={handleLike} bookmarks={bookmarks} p={p} id={index+1}/>
            </div>
          )
        } else {
          return (
          <div key={index} className='inline-block col col-3 p-10'>
            <Card handleDetailsPage={handleDetailsPage} handleLike={handleLike} bookmarks={bookmarks} p={p} id={index+1}/>
          </div>
          )
        }
      })}
    </div>
  )
}

export default Default;