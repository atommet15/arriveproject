import React from 'react'

const SearchBar = ({searchText, onTextChange, onSearch}) => {
  return (

    <div className="header-bar">
      <div className="container">

          <a className="navbar-brand" href="#">
            <img alt="Brand" src="../../assets/logo.png" />
          </a>
        <form >
          <div className="input-group">
            <input type="text" value={searchText} className="form-control" placeholder="Search by city" onChange={(event) => onTextChange(event)}></input>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={() => onSearch(searchText)}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
              <button className="btn btn-default" type="button" onClick={() => onSearch(searchText)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>

    /*
    <div className="input-group">
      <input type="text" value={searchText} className="form-control" placeholder="Search by city" onChange={(event) => onTextChange(event)}></input>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={() => onSearch(searchText)}>Go!</button>
      </span>
    </div>*/
  )
}

export default SearchBar;
