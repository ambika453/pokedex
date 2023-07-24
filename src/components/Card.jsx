import React from 'react'
import { filledHeart, emptyHeart } from '../assets';

const Card = ({ p, handleLike, bookmarks, id, handleDetailsPage}) => {
  return (
      <div className='w-64 h-60 rounded-xl group relative shadow-card hover:shadow-cardhover card'>
        <img className="w-60 h-60 rounded-xl p-4 text-[#bfdbf7] text-sm" value={p} onClick={handleDetailsPage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt='No Image Found' />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 pt-3 pl-4 rounded-md">
          <h2 className="text-white text-m font-bold">{p}</h2>
          <div className='flex flex-row py-1'>
            <h4 className="text-white pr-2 text-m font-bold">#{id}</h4>
            <img className="w-6 h-6 object-contain" id={id} value={p} onClick={handleLike} src={bookmarks.includes(p) ? filledHeart : emptyHeart} />
          </div>
        </div>
      </div>
  )
}

export default Card