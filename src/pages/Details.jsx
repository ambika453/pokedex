import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { Card } from '../components'
import { emptyHeart, filledHeart, right_arrow, left, right } from '../assets';

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

const Details = () => {
  const [firstQuery, setFirstQuery] = useState('')
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(false)
  const [bookmarks, setBookmarks] = useState(getDataFromLS())
  const [name, setName] = useState()
  const [image, SetImage] = useState()
  const [baseExperience, setBaseExperience] = useState()
  const [height, setHeight] = useState()
  const [id, setId] = useState()
  const [weight, setWeight] = useState()
  const [ability, setAbility] = useState([])
  const [statName, setStatName] = useState([])
  const [statNums, setStatNums] = useState([])
  const [types, setTypes] = useState([])
  const [growthRate, setGrowthRate] = useState()
  const [evolutionName, setEvolutionName] = useState([])
  const [evolutionId, setEvolutionId] = useState([])
  const [evolutionImg, setEvolutionImg] = useState([])
  const [habitat, setHabitat] = useState()
  const [bookmarkIds, setBookmarkIds] = useState(getIdsFromLS())
  const [first, setFirst] = useState(true)
  const [last, setLast] = useState(true)
  const [query, setQuery] = useState()

  const location = useLocation()

  useEffect(() => {
    if (location.state && 'queryString' in location.state){
      setFirstQuery(location.state.queryString)
      console.log(firstQuery)
      setLoading(true)
      let cancel
      axios.get(`https://pokeapi.co/api/v2/pokemon/${firstQuery}`, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        console.log(res)
        SetImage(res.data.sprites.other.dream_world.front_default)
        console.log(res)
        setName(res.data.name)
        setId(res.data.id)
        if(res.data.id==1){
          setFirst(false)
        }else if(res.data.id==1010){
          setLast(false)
        }
        setBaseExperience(res.data.base_experience)
        setTypes([...res.data.types.map(i=>i.type.name)])
        setAbility([...res.data.abilities.map(i=>i.ability.name)])
        setStatName([...res.data.stats.map(i=>i.stat.name)])
        setStatNums([...res.data.stats.map(i=>i.base_stat)])
        setHeight(res.data.height)
        setWeight(res.data.weight)
        setLoading(false)
      })
    }
  }, [firstQuery])

  useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        console.log(res)
        SetImage(res.data.sprites.other.dream_world.front_default)
        console.log(res)
        setName(res.data.name)
        setId(res.data.id)
        if(res.data.id==1){
          setFirst(false)
        }else if(res.data.id==1010){
          setLast(false)
        }
        setBaseExperience(res.data.base_experience)
        setTypes([...res.data.types.map(i=>i.type.name)])
        setAbility([...res.data.abilities.map(i=>i.ability.name)])
        setStatName([...res.data.stats.map(i=>i.stat.name)])
        setStatNums([...res.data.stats.map(i=>i.base_stat)])
        setHeight(res.data.height)
        setWeight(res.data.weight)
        setLoading(false)
      })
  }, [query])

  useEffect(()=>{
    let cancel 
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res=>{ 
        console.log(res)
        setHabitat(res.data.habitat.name)
        setGrowthRate(res.data.growth_rate.name)
        axios.get(res.data.evolution_chain.url).then(async (ans)=>{
          const req1 = `https://pokeapi.co/api/v2/pokemon/${ans.data.chain.species.name}`
          const req2 = `https://pokeapi.co/api/v2/pokemon/${ans.data.chain.evolves_to[0].species.name}`
          const req3 = `https://pokeapi.co/api/v2/pokemon/${ans.data.chain.evolves_to[0].evolves_to[0].species.name}`
          
          const req = [req1, req2, req3]
          const results = req.map(i=>axios.get(i))
          const ress = await Promise.all(results)
          console.log(ress)

          setEvolutionImg([ress[0].data.sprites.other.dream_world.front_default, ress[1].data.sprites.other.dream_world.front_default, ress[2].data.sprites.other.dream_world.front_default])
          setEvolutionName([ress[0].data.name, ress[1].data.name, ress[2].data.name])
          setEvolutionId([ress[0].data.id, ress[1].data.id, ress[2].data.id])
        })
      })
  },[id])

  useEffect(()=>{
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    localStorage.setItem('ids', JSON.stringify(bookmarkIds))
  },[bookmarks, bookmarkIds])

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

  const handleLeft = () => {
    if(id-1 == 0){
      setFirst(false)
    }else{
      console.log(id-1)
      setQuery(id-1)
    }
  }

  const handleRight = () => {
    if(id+1 == 1010){
      setLast(false)
    }else{
      console.log(id+1)
      setQuery(id+1)
    }
  }

  if (loading) return "Loading..."

  return (
    <div className='text-white'>
      <div className='flex felx-row pb-2'>
        <div className='flex w-full justify-start'>{first && <img src={left} className='cursor-pointer' onClick={handleLeft}/>}</div>
        <div className='flex w-full justify-end'>{last && <img src={right} className='cursor-pointer' onClick={handleRight}/>}</div>
      </div>
      <div className='w-full rounded-xl shadow-card card'>
        <div className='flex flex-row'>
          <div className='flex flex-col flex-grow py-8 inline-block'>
            <div className='flex flex-col py-1 pb-2 items-center'>
              <div className='text-lg'>Type</div>
              {types.map(e=>(
                <div className='rounded-xl text-sm w-16 h-6 text-center m-2 bg-[#f48c06]'>{e}</div>
              ))}
            </div>
            <div className='flex flex-col py-1 pb-2 items-center'>
              <div className='text-lg'>Ability</div>
              {ability.map(e=>(
                <div className='rounded-xl text-sm w-24 h-6 text-center m-2 bg-[#0a9396]'>{e}</div>
              ))}
            </div>
            <div className='flex flex-col py-1 items-center'>
              <h2>Habitat</h2>
              <div className='rounded-xl text-sm w-24 h-6 text-center m-2 bg-[#99d98c]'>{habitat}</div>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center flex-grow w-1/3 inline-block'>
              <img className='w-64 h-64' src={image}/>
            </div>
            <div className='flex flex-col py-8 items-center flex-grow inline-block'>
              <h2>Base Experience</h2>
              <div className='rounded-xl text-sm w-16 h-6 text-center m-2 bg-[#ea698b]'>{baseExperience}</div>
              <h2>Growth Rate</h2>
              <div className='rounded-xl text-sm w-28 h-6 text-center m-2 bg-[#99d98c]'>{growthRate}</div>
              <h2>Height</h2>
              <div className='rounded-xl text-sm w-20 h-6 text-center m-2 bg-[#daa89b]'>{height} m</div>
              <h2>Weight</h2>
              <div className='rounded-xl text-sm w-20 h-6 text-center m-2 bg-[#e899dc]'>{weight} kg</div>
            </div>
          </div>
        <div className='pb-4'>
          <div className='flex justify-center text-2xl font-extrabold'>{name}</div>
          <div className='flex justify-center text-xl font-extrabold'>
            <div className='inline-block p-2'>#{id}</div>
            <img className='inline-block p-2 w-10' id={id} value={name} onClick={handleLike} src={bookmarks.includes(name) ? filledHeart : emptyHeart} />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <div className='text-xl py-3'>Stats</div>
        <div className='flex items-center py-2 px-2 rounded-xl shadow-card card'>
          <div>{statName.map(e=>(
            <div className='h-6 m-4'>{e}</div>
          ))}</div>
          <div>
            {statNums.map(e=>(
            <div className='w-[600px] h-6 m-4 border border-[#bfdbf7]'>
              <div className={`h-6 bg-[#757bc8] w-${Math.floor(e/20)}/12`}></div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <div className='text-xl py-3'>Evolution</div>
        <div>
          <div className='flex flex-row justify-center py-4 rounded-xl shadow-card card'>
            {evolutionImg.map((e,i)=>(
              <div key={i} className='flex flex-row justify-center items-center'>
                <div className='flex flex-col items-center px-6'>
                  <img className='w-48 h-40 py-2' src={e}/>
                  <div className='px-2'><span className='text-m font-medium px-1'>#{evolutionId[i]}</span><span className='text-m px-1 font-medium'>{evolutionName[i]}</span></div>
                </div>
                <div className=''>
                  { i<evolutionImg.length-1 && <img className='inline px-10' src={right_arrow}/>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details