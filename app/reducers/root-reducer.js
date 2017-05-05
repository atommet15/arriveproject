import {combineReducers} from 'redux';


const carrierReducer = (state = [], action) => { return [] }




const RootReducer = combineReducers({
  carriers: carrierReducer
});

export default RootReducer
