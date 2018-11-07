import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import reducers from './reducers';
import App from './components/App.jsx';


import PostsNew from './components/PostsNew.js';

let invoicingApp = function(state = {}, action) {
  return {
    subTotal: numeral(0),
    taxPercentage: taxPercentageReducer(state.taxPercentage, action),
    lineItems: lineItemsReducer(state.lineItems, action),
    grandTotal: numeral(0),
    number: 1,
    currency: function(state = 'USD', action) {
      return state
    }(state.currency, action),
    fromCompany: function(state = defaultCompany, action) {
      return state
    }(state.fromCompany, action),
    toCompany: function(state = defaultToCompany, action) {
      return state
    }(state.toCompany, action)
  }
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
      <h1>Invoice App</h1>
      </div>
  </Provider>
  , document.querySelector('.container'));

export default {
  invoicingApp
}
