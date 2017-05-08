import React from 'react'
import LocationList from './location-list'
import CapsList from './caps-list'
import { formatPhoneNumber, formatCurrency } from '../utils/utils'

const CarrierDetails = ({carrier}) => {

  if(carrier){
    // display all of the carries detailed information
    return (
      <div>
        <address>
          <h2>{carrier.Name}</h2>
          <h4><LocationList locations={carrier.Locations}/></h4>

          <ul className='list-inline'>
            <li>{formatCurrency(carrier.PricePerLoad) + ' per load'}</li>
            <li><CapsList caps={carrier.Capabilities} /></li>
          </ul>

          <strong>{carrier.ContactName}</strong> <br/>
          <a href="mailto:#">{carrier.ContactEmail}</a><br/>
          {formatPhoneNumber(carrier.ContactPhone)}
        </address>
      </div>
    )
  }
  else{
    return null;
  }
}

export default CarrierDetails
