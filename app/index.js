import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app'
import RootReducer from './reducers/root-reducer';

// create redux store
const store = createStore(RootReducer);

// render the main entrypoint of the app into the dom
ReactDOM.render(
  // Provider is a react wrapper of the redux store. State from the store will flow down to all children that are "subscribed"
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("App")
);
