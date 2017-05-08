import {combineReducers} from 'redux';


const carriersReducer = (state = [], action) => {

  switch(action.type){
    case 'GET_CARRIERS':
      return action.payload.data;
    case 'CLEAR_CARRIERS':
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

const activeCarrierReducer = (state = null, action) => {
  switch(action.type){
    case 'GET_CARRIERS':
      return null;
    case 'UPDATE_ACTIVE_CARRIER':
      return action.payload.data ? action.payload.data : action.payload;
    case 'CLEAR_CARRIERS':
      return null;
    default:
      return state;
  }
}


const RootReducer = combineReducers({
  searchText: searchTextReducer,
  carriers: carriersReducer,
  activeCarrier: activeCarrierReducer
});

export default RootReducer
