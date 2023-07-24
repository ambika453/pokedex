import React, { useState } from 'react'
import { Card } from '../components'
import axios from 'axios'

const Listing = ({ ids, handleDetailsPage, bookmarks, pokemons, handleLike }) => {
  return (
      <div> 
        { pokemons.length !==0 ? (
          pokemons.map((p, index) => (
            (
              <div key={index} className='inline-block col col-3 p-10'>
                <Card handleDetailsPage={handleDetailsPage} handleLike={handleLike} bookmarks={bookmarks} p={p} id={ids[index]}/>
              </div>
            )
          ))
        ) : (
          <div className='text-[#bfdbf7] text-sm pt-16'>No Results Found</div>
        )
      }
      </div>
  )
}

export default Listing