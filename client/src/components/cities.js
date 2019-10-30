import React, { useState, useEffect } from 'react'

const fetchCities = (url) => {
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCities(data)
    setLoading(false)   
  }, []);
  return {data, loading}

}

const Cities = () => {
    const {cities, loading} = fetchCities('http://localhost:5000/cities/all')

  return(
    <div className="row ">
      {loading ? <h1>...LOADING</h1> : <h1>FUNCIONO</h1>} 
    </div>
  )
}

export default Cities