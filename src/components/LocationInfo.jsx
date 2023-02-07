import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {


  return (
    <div className='location'>
      <h2 className='location__name'>{location?.name}</h2>
      <ul className='location__list'>
        <li className='location__item'><span className='location__label'>Tipo: </span>{location?.type}</li>
        <li className='location__item'><span className='location__label'>Dimension: </span>{location?.dimension}</li>
        <li className='location__item'><span className='location__label'>Population: </span>{location?.residents.length}</li>
      </ul>
    </div>
  )
}

export default LocationInfo