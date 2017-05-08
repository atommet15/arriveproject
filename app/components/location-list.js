import React from 'react'
import { formatWord } from '../utils/utils'
const LocationList = ({locations}) => {

  // format and list out all the locations provided
  const items = locations.map(location => {
    let city = formatWord(location.City);
    let state = location.State.toUpperCase();

    return <li key={city}>{`${city}, ${state}`}</li>
  });

  return (
    <ul className='list-inline'>
      {items}
    </ul>
  );
}


export default LocationList;
