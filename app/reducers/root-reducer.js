import {combineReducers} from 'redux';


const carriersReducer = (state = [], action) => {

  switch(action.type){
    case 'GET_CARRIERS':
      return action.payload.data;
    default:
      return state;
  }
}

const searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'UPDATE_SEARCH_TEXT':
      return action.text;
    default:
      return state;
  }
}


const RootReducer = combineReducers({
  searchText: searchTextReducer,
  carriers: carriersReducer
});

export default RootReducer
