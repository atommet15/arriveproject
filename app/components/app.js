import React from 'react'
import ResultsPanel from './results-panel'
import SearchBarContainer from '../containers/search-bar-container'


const App = () => {
  return (
    <div className="container-fluid">
      <SearchBarContainer />
      <ResultsPanel />
    </div>
  )
}

export default App;
