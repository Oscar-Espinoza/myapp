import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [isLoading, setIsloading] = useState(false)
  
  useEffect(() => {
    setIsloading(true)
    axios.get('http://localhost:5000/cities/all')
      .then(res => {
        console.log(res)
        setCities(res.data)
        setIsloading(false)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return(
    <div>
      {isLoading ? <Loading> </Loading> : console.log('rendered')}
      <ul>
        {cities.map(city => (
          <li key = {city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cities