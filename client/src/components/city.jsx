import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapeaEstadoscomoProps = state => {
  return {
      cities: state.cities
  }
}

const City = props => {
  const { cityId } = useParams();
  return (
    <div>
      <h3>City: {cityId}</h3>
    </div>
  );
}

export default connect(mapeaEstadoscomoProps)(City)