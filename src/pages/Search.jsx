import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Searchbar, Card, Default, Listing, AdvancedSearch } from '../components';
import { useForm } from 'react-hook-form'

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

const Search = () => {
  const [loading, setLoading] = useState(true) 
  const [advancedSearch, setAdvancedSearch] = useState(false)
  const [advSearchPage, setAdvSearchPage] = useState(false)
  const [bookmarks, setBookmarks] = useState(getDataFromLS())
  const [pokemons, setPokemons] = useState([])
  const [searchPage, setSearchPage] = useState(false)
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [hasMore, setHasMore] = useState(false)
  const [query, setQuery] = useState()
  const [filterArray, setFilterArray] = useState([])
  const [queryUrl, setQueryUrl] = useState()
  const [bookmarkIds, setBookmarkIds] = useState(getIdsFromLS())
  const [ids, setIds] = useState()

  const observer = useRef()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const lastPokemonRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setCurrentPageUrl(nextPageUrl)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore]);

  useEffect(() => {
    setPokemons([])
  }, [])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      console.log(res)
      setLoading(false)
      if (res.data.next === null){
        setHasMore(false)
      } else {
        setHasMore(true)
      }
      setNextPageUrl(res.data.next)
      setPokemons(prevPokemons => {
        return [...prevPokemons, ...res.data.results.map(p => p.name)]
      })
    })
    return () => cancel()
  }, [currentPageUrl])

  useEffect(() => {
    setLoading(true)
    try{
      let cancel
      axios.get(queryUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setPokemons([res.data.name])
        setIds([res.data.id])
        setSearchPage(true)
      })
      return () => cancel()
    }catch(err){
      setPokemons([])
      setSearchPage(true)
      console.log('oops..')
    }
  }, [queryUrl])

  useEffect(()=>{
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    localStorage.setItem('ids',JSON.stringify(bookmarkIds))
  },[bookmarks, bookmarkIds])

  if (loading) return "Loading..."

  const handleSearchQuery = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setQueryUrl(`https://pokeapi.co/api/v2/pokemon/${query}`)
  }

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
    navigate('/details', { state: { queryString: e.target.getAttribute('value')} })
  } 

  const handleAdvancedSearch = () =>{
    setAdvancedSearch(!advancedSearch)
  }

  const handleAdvancedSearchForm = async (formData) => {
    const fetchUrls = []
    const urls=[0,0,0]
    const fetchRange = `https://pokeapi.co/api/v2/pokemon?offset=${Number(formData.start)-1}&limit=${Number(formData.end)-Number(formData.start)+1}`
    fetchUrls.push(fetchRange)
    if(Number(formData.ability) !== 0) {
      const fetchAbility = `https://pokeapi.co/api/v2/ability/${formData.ability}`
      fetchUrls.push(fetchAbility)
      urls[0]+=1
    }
    if(formData.type){
      const fetchType = formData.type.map(p => (`https://pokeapi.co/api/v2/type/${p}`))
      fetchUrls.push(...fetchType)
      urls[1]+=fetchType.length
    }
    if(formData.region){
      const fetchArea = formData.region.map(s => s.split(',')).flat().map(e => Number(e)).map(p => (`https://pokeapi.co/api/v2/pokedex/${p}`))
      fetchUrls.push(...fetchArea)
      urls[2]+=fetchArea.length
    }
    
    console.log(urls)
    const res = await Promise.all([...fetchUrls.map(url => axios.get(url))])
    console.log(res)
    
    const resName = [[...res[0].data.results.map(i=>i.name)]]
    const resId = [[...res[0].data.results.map(i=>(i.url.match(/\/(\d+)\//))[1])]]
    if(urls[0]==1){
      resName.push([...res[1].data.pokemon.map(i=>i.pokemon.name)])
      resId.push([...res[1].data.pokemon.map(i=>(i.pokemon.url.match(/\/(\d+)\//))[1])])
    }
    if (urls[1]>0){
      for(let j=1; j<urls[1]+1; j++){
        resName.push([...res[urls[0]+j].data.pokemon.map(i=>i.pokemon.name)])
        resId.push([...res[urls[0]+j].data.pokemon.map(i=>(i.pokemon.url.match(/\/(\d+)\//))[1])])
      }
    }
    if(urls[2]>0){
      for(let j=1; j<urls[2]+1; j++){
        resName.push([...res[urls[0]+urls[1]+j].data.pokemon_entries.map(i=>(i.pokemon_species.name))])
        resId.push([...res[urls[0]+urls[1]+j].data.pokemon_entries.map(i=>(i.pokemon_species.url.match(/\/(\d+)\//))[1])])
      }
    }
    console.log(resName)
    console.log(resId)
    const filterName= resName.reduce((common, curArr) => {
      return common.filter(value => curArr.includes(value))
    })
    const filterId = resId.reduce((common, curArr) => {
      return common.filter(value => curArr.includes(value))
    })
    console.log(filterName)
    console.log(filterId)
    setAdvSearchPage(true)
    setPokemons(filterName)
    setIds(filterId)
    setAdvancedSearch(false)
  }

  return (
    <div className='flex flex-col justify-center text-white items-center mt-6'>
      <div className='p pb-4'>
        <Searchbar handleSearch={handleSearchQuery} handleSubmit={handleSearchSubmit}/>
      </div>
      <div>
        <AdvancedSearch register={register} handleSubmit={handleSubmit} advancedSearch={advancedSearch} handleAdvancedSearch={handleAdvancedSearch} handleAdvancedSearchForm={handleAdvancedSearchForm}/>
      </div>
      <div>{loading && 'Loading..'}</div>
      { searchPage || advSearchPage ? (
        <Listing handleDetailsPage={handleDetailsPage} ids={ids} bookmarks={bookmarks} pokemons={pokemons} handleLike={handleLike}/>
      ) : (
        <Default handleDetailsPage={handleDetailsPage} bookmarks={bookmarks} pokemons={pokemons} lastPokemonRef={lastPokemonRef} handleLike={handleLike}/>
      )
      }
    </div>
  );
};

export default Search;