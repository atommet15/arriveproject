import React from 'react'
import CarrierListContainer from '../containers/carrier-list-container'
import CarrierDetailsContainer from '../containers/carrier-details-container'

const ResultsPanel = () => {

  return (
    <div className="container results-panel">
      <div className="row">
        <div className="col-xs-6">
          <CarrierListContainer />
        </div>
        <div className="col-xs-6">
          <CarrierDetailsContainer />
        </div>
      </div>
    </div>
  );
}

export default ResultsPanel;
