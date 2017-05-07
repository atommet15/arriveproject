import React from 'react'



const CarrierDetails = ({carrier}) => {

  if(carrier){
    return (
      <div>
        <address>
          <strong>{carrier.Name}</strong><br/>
          {carrier.ContactName} <br/>
          <a href="mailto:#">{carrier.ContactEmail}</a><br/>
          {carrier.ContactPhone}
        </address>
      </div>
    )
  }
  return null;
}

export default CarrierDetails
