import { UPDATE_LINE_ITEM } from '../actions/types';

let numeral = require('numeral');


export default function lineItemReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_LINE_ITEM':
      let quantity = action.lineItem.get('quantity')
      let cost = action.lineItem.get('cost')
      var newState = {
        total: numeral(quantity.value() * cost.value()),
        quantity: quantity,
        cost: cost,
        description: action.lineItem.get('description')
      }
      return newState;
    default:
      return state;
  }
}