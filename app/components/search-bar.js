import React from 'react'

const SearchBar = ({searchText, onTextChange, onSearch}) => {
  return (
    <div className="input-group">
      <input type="text" value={searchText} className="form-control" placeholder="Search by city" onChange={(event) => onTextChange(event)}></input>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={() => onSearch(searchText)}>Go!</button>
      </span>
    </div>
  )
}

export default SearchBar;
