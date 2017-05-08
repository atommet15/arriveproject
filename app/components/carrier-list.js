import React from 'react'
import LocationList from './location-list'
import CarrierDetails from './carrier-details'


const renderListItem = (carrier, activeCarrier) =>  {
  if(!activeCarrier || activeCarrier.Id !== carrier.Id){
    return(
      <div>
        <h4><strong>{carrier.Name}</strong></h4>
        <LocationList locations={carrier.Locations} />
      </div>
    )
  }


  else if(activeCarrier.Id === carrier.Id){
    return (
      <CarrierDetails carrier={activeCarrier}/>
    );
  }
};

const CarrierList = ({carriers, activeCarrier, onCarrierClick}) => {

  const carrierArray = carriers.map( carrier => {
    return(
      <button key={carrier.Id} type="button" className="list-group-item" onClick={() => onCarrierClick(carrier.Id)}>

        {renderListItem(carrier,activeCarrier)}
      </button>
    )
  });


  return (
    <div>
      <h5>{carriers.length + ' carriers found'}</h5>
      <div className="list-group">
          {carrierArray}
      </div>
    </div>

  );
}

export default CarrierList;
