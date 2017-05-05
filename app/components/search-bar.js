import React from 'react'

const SearchBar = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search"></input>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
    </div>
  )
}

export default SearchBar;
