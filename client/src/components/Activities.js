import React, { useEffect } from 'react'
import Loading from './Loading'
import { connect } from 'react-redux'
import getActivities from '../actions/citiesActions.js'
import { useParams } from 'react-router-dom'

const Activities = props => {
  const { itineraryId } = useParams()
  useEffect(() => {
    props.getActivities(itineraryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps        
  }, [])
  return (
    props.isLoading ? <Loading></Loading>
      :
      <div className="row">
        {props.itinerary.activities.map((activity, index) => (
          <div className="col-10">
            <h1>Activity #{index + 1}</h1>
            <h2>{activity.title}</h2>
          </div>
        ))}
      </div>
  )
}

const mapeaEstadoscomoProps = state => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
    isLoading: state.itinerariesReducer.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: (id) => dispatch(getActivities(id))
  };
};


export default connect(mapeaEstadoscomoProps, mapDispatchToProps)(Activities)