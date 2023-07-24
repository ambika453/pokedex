import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components'

const getDataFromLS = () => {
  const names = localStorage.getItem('bookmarks')
  if (names){
    return JSON.parse(names)
  } else {
    return []
  }
}
const getIdsFromLS = () => {
  const ids = localStorage.getItem('ids')
  if(ids){
    return JSON.parse(ids)
  } else {
    return []
  }
}

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(getDataFromLS())
  const [bookmarkIds, setBookmarkIds] = useState(getIdsFromLS())
  const navigate = useNavigate()

  useEffect(()=>{
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    localStorage.setItem('ids', JSON.stringify(bookmarkIds))
  },[bookmarks,bookmarkIds])

  const handleLike = (e) => {
    const value = e.target.getAttribute('value')
    const id = e.target.getAttribute('id')
    if(value){
      if (bookmarks.includes(value)){
        setBookmarks(bookmarks.filter(element => element !== value))
      } else {
        setBookmarks([value, ...bookmarks])
      }
    }
    if(id){
      if (bookmarkIds.includes(id)){
        setBookmarkIds(bookmarkIds.filter(element => element !== id))
      } else {
        setBookmarkIds([id, ...bookmarkIds])
      }
    }
  }

  const handleDetailsPage = (e) => {
    e.preventDefault()
    navigate('/details', { state: { queryString: e.target.getAttribute('value') } })
  } 

  return (
    <div className='flex flex-col justify-center text-white items-center'>
      <div> 
        { bookmarks.map((p, index) => (
            <div key={index} className='inline-block col-3 p-10'>
              <Card handleDetailsPage={handleDetailsPage} handleLike={handleLike} bookmarks={bookmarks} p={p} id={bookmarkIds[index]}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Bookmarks