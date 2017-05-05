import React from 'react'

const CarrierList = ({carriers}) => {

  const carrierArray = carriers.map( carrier => {
    return <a href="#" key={carrier.Id} className="list-group-item">{carrier.Name}</a>
  });


  return (
    <div className="list-group">
      {carrierArray}
    </div>
  );
}

export default CarrierList;
