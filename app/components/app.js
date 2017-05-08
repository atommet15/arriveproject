import React from 'react'
import ResultsContainer from '../containers/results-container'
import SearchBarContainer from '../containers/search-bar-container'


const App = () => {
  return (
    <div className="container-fluid">
      <SearchBarContainer />
      <ResultsContainer />
    </div>
  )
}

export default App;
