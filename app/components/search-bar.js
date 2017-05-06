import React from 'react'

const SearchBar = ({searchText, onTextChange, onSearch, onClear}) => {
  return (
    <div className="header-bar">
      <div className="container">
          <a className="navbar-brand" href="http://www.arrivelogistics.com/">
            <img alt="Brand" src="../../assets/logo.png" />
          </a>
        <form onSubmit={(event) => { event.preventDefault(); onSearch(searchText); }}>
          <div className="input-group">
            <input type="text" value={searchText} className="form-control" placeholder="Search by city" onChange={(event) => onTextChange(event)}></input>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit" title="Search by city">
                <span className="glyphicon glyphicon-search"></span>
              </button>
              <button className="btn btn-default" type="button" onClick={() => onClear()} title="Clear search">
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;
