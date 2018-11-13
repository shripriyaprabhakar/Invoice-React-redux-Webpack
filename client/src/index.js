import React from 'react';
import ReactDOM from 'react-dom';


import { InvoiceContainer } from './containers/Invoice_container';


import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { invoicingApp } from './reducers'

let store = createStore(
  invoicingApp,
  applyMiddleware()
)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <InvoiceContainer/>
      </div>
    );
  }

}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);