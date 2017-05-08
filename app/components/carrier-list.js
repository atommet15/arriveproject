import React from 'react'
import LocationList from './location-list'
import CarrierDetails from './carrier-details'

// renderListItem - function to either render summary level info or detail level info based on current state
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
  // if carries has results in an array display them
  if(Array.isArray(carriers)){
    const carrierArray = carriers.map( carrier => {
      return(
        <button key={carrier.Id} type="button" className="list-group-item" onClick={() => onCarrierClick(carrier.Id)}>
          {renderListItem(carrier,activeCarrier)}
        </button>
      )
    });

    // display number of results and matching carriers
    return (
      <div>
        <h5>{carriers.length + ' carriers found'}</h5>
        <div className="list-group">
            {carrierArray}
        </div>
      </div>
    );
  }

  // if carriers is not an array, no results were found and carriers is a string, display it
  else{
    return (
      <div>
        <h5>{carriers}</h5>
      </div>
    );
  }
}

export default CarrierList;
