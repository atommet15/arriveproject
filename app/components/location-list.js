import React from 'react'

const LocationList = ({locations}) => {

  const items = locations.map(location => {
    let city = location.City.replace(/\b\w/g, c => c.toUpperCase());
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
