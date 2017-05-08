import {combineReducers} from 'redux';

// carriersReducer - mutates the state of the list of carriers based on the action
const carriersReducer = (state = [], action) => {

  switch(action.type){
    case 'GET_CARRIERS':
      // return the response of the api request
      return action.payload.data;
    case 'CLEAR_CARRIERS':
      // return an empty array to clear out the carriers
      return [];
    case 'GET_CARRIER_DETAILS':

      // update the selected carrier with detailed information
      const newState = Object.assign(state);
      const index = newState.map( carrier => carrier.Id).indexOf(action.payload.data.Id)
      newState[index] = action.payload.data;

      return newState;
    default:
      return state;
  }
}

// searchTextReducer - mutates the state of the search text based on the action
const searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'UPDATE_SEARCH_TEXT':
      return action.text;

    case 'CLEAR_CARRIERS':
      return '';
    default:
      return state;
  }
}

// activeCarrierReducer - mutates the state of active carrier details based on the action
const activeCarrierReducer = (state = null, action) => {
  switch(action.type){
    case 'GET_CARRIERS':
      return null;
    case 'UPDATE_ACTIVE_CARRIER':
      // this payload can either be a response object from a promise or an already cached carrier
      return action.payload.data ? action.payload.data : action.payload;
    case 'CLEAR_CARRIERS':
      return null;
    default:
      return state;
  }
}

// combine all the above reducers to create the application state object.
const RootReducer = combineReducers({
  searchText: searchTextReducer,
  carriers: carriersReducer,
  activeCarrier: activeCarrierReducer
});

export default RootReducer
