import React from 'react'
import CarrierListContainer from '../containers/carrier-list-container'
import SearchBarContainer from '../containers/search-bar-container'


const App = () => {
  return (
    <div className="container-fluid">
      <SearchBarContainer />
      <CarrierListContainer />
    </div>
  )
}

export default App;
