import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from '@reduxjs/toolkit';
import ActionType from './redux/GlobalActionType';

const globalState = { 
  globalNumber : 0
}

const rootReducer = (state = globalState, action) => {
  if(action.type === ActionType.PLUS){
    return {
      ...state,
      globalNumber: state.globalNumber + 1
    }
  }
  if(action.type === ActionType.MINUS){
    return {
      ...state,
      globalNumber: state.globalNumber - 1
    }
  }

  return state
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
