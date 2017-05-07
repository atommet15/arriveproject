import React from 'react'
import Results from './results'
import SearchBarContainer from '../containers/search-bar-container'


const App = () => {
  return (
    <div className="container-fluid">
      <SearchBarContainer />
      <Results />
    </div>
  )
}

export default App;
