import React from 'react'
import CarrierListContainer from '../containers/carrier-list-container'

// renderCarrierList - renders the list of carriers only if there are any to display.
const renderCarrierList = (carriers, activeCarrier) => {
  if(carriers.length > 0){
    return <CarrierListContainer carriers={carriers} activeCarrier={activeCarrier} />
  }
};

const ResultsPanel = ({carriers, activeCarrier}) => {

  return (
    <div className="container results-panel">
      {renderCarrierList(carriers, activeCarrier)}
    </div>
  );
}

export default ResultsPanel;
