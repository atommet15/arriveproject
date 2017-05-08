import React from 'react'
import { formatWord } from '../utils/utils'

const CapsList = ({caps}) => {

  // format and list all the capabilities
  const items = caps.map(cap => {
    let finalCap = formatWord(cap);
    return <li key={finalCap}>{finalCap}</li>
  });

  return (
    <ul className='list-inline ticks'>
      {items}
    </ul>
  );
}

export default CapsList;
