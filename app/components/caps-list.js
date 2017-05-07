import React from 'react'

const CapsList = ({caps}) => {

  const items = caps.map(cap => {
    let finalCap = cap.replace(/\b\w/g, c => c.toUpperCase());
    return <li key={finalCap}>{finalCap}</li>
  });

  return (
    <ul className='list-inline ticks'>
      {items}
    </ul>
  );
}


export default CapsList;
