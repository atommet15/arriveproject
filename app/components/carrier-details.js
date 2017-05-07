import React from 'react'
import LocationList from './location-list'
import CapsList from './caps-list'

const CarrierDetails = ({carrier}) => {

  if(carrier){
    let n = carrier.ContactPhone.toString().match(/^(\d{3})(\d{3})(\d{4})$/);
    let finalNumber = `(${n[1]}) ${n[2]}-${n[3]}`;

    return (
      <div>
        <address>
          <h2>{carrier.Name}</h2>
          <h4><LocationList locations={carrier.Locations}/></h4>
          <h4>{'$' + carrier.PricePerLoad + ' per load'}</h4>

          <CapsList caps={carrier.Capabilities} />

          <strong>{carrier.ContactName}</strong> <br/>
          <a href="mailto:#">{carrier.ContactEmail}</a><br/>
          {finalNumber}
        </address>
      </div>
    )
  }
  else{
    return null;
  }

}

export default CarrierDetails
