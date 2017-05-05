import React from 'react'
import CarrierList from './carrier-list'
import SearchBar from './search-bar'


const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <CarrierList />
    </div>
  )
}

export default App;
