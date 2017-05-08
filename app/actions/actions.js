import axios from 'axios';


// add a response interceptor to axios to handle any non 2xx responses
// axios.interceptors.response.use((response) => {
//     // Do something with response data
//     console.log('good response');
//     return response;
//   }, (error) => {
//     // Do something with response error
//     console.log(error.response);
//     return Promise.reject(error);
//   }
// );


// searchCarriers - gets list of carriers from the api based on search text provided.
// Returns 404 when no carriers are found
export const searchCarriers = (searchText) => {
  const request = axios.get('http://alinterviewapi.azurewebsites.net/api/carriers/' + searchText)
    // catch 404 error specific to this call
    .catch(error => {
      return error.response;
  });

  return {
    type: 'GET_CARRIERS',
    payload: request
  }
}

// updateSearchText - updates the search text state
export const updateSearchText = (event) => {
  return {
    type: 'UPDATE_SEARCH_TEXT',
    text: event.target.value
  }
}

// getCarrierDetails - gets details of a specific carrier based on the id provided
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
      // carrier details have already been retrived so update with the carrier object
      dispatch({
        type: 'UPDATE_ACTIVE_CARRIER',
        payload: carrier
      });
    }

  }
}

// clearCarriers - clears out the carriers state
export const clearCarriers = () => {
  return {
    type: 'CLEAR_CARRIERS'
  }
}
