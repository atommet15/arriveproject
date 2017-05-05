import axios from 'axios';

export const searchCarriers = (searchText) => {
  const request = axios.get('http://alinterviewapi.azurewebsites.net/api/carriers/' + searchText);
  return {
    type: 'GET_CARRIERS',
    payload: request
  }
}

export const updateSearchText = (event) => {
  return {
    type: 'UPDATE_SEARCH_TEXT',
    text: event.target.value
  }
}
