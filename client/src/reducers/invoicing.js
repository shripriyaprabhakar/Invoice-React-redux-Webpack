import AddItemReducer from './reducer_addLineItem';
import DelLineItemReducer from './reducer_delLineItem';
import TaxPercentageReducer from './reducer_taxPercentage';
import UpdateLineItemReducer from './reducer_updateLineItem';

let numeral = require('numeral');


let invoicingApp = function(state = {}, action) {
  return {
    subTotal: numeral(0),
    taxPercentage: taxPercentageReducer(state.taxPercentage, action),
    addItem: AddItemReducer(state.addItem, action),
    delItem: DelItemReducer(state.delItem, action),
    updItem: UpdateLineItemReducer(state.updItem, action),
    grandTotal: numeral(0),
    number: 1,
    currency: function(state = 'USD', action) {
      return state
    }(state.currency, action),
  }
}

export default {
  invoicingApp
}
