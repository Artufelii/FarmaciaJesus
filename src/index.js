import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import './index.css'
import App from './App';

const store = createStore(combineReducers({
  form:formReducer
}))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = { store }>
    <App />
  </Provider>,
);

