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

export const getCarrierDetails = (id) => {
  // Interpreted by the thunk middleware:
  return  (dispatch, getState) => {
    // from the current state object, get the selected carrier object
    const state = getState();
    const carrier = state.carriers[state.carriers.map( carrier => carrier.Id).indexOf(id)]

    // if the details for this carrier haven't been fetched yet, get them
    if(Object.keys(carrier).length <= 3){
      const request = axios.get('http://alinterviewapi.azurewebsites.net/api/carrierDetails/' + id);
      dispatch({
        type: 'GET_CARRIER_DETAILS',
        payload: request
      });

      // update the active Carrier with the retrived data
      dispatch({
        type: 'UPDATE_ACTIVE_CARRIER',
        payload: request
      });
    }
    else{
      // carrier details have already been retrived. update with the carrier object
      // update the active Carrier with the retrived data
      dispatch({
        type: 'UPDATE_ACTIVE_CARRIER',
        payload: carrier
      });
    }

  }
}

export const clearCarriers = () => {
  return {
    type: 'CLEAR_CARRIERS'
  }
}
