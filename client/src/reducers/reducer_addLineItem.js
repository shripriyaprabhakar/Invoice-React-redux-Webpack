import { ADD_LINE_ITEM } from '../actions/types';

let numeral = require('numeral');


export function lineItemsReducer (state = [], action) {
  switch(action.type) {
    case 'ADD_LINE_ITEM':
      let newLineItem = {description: null, quantity: numeral(0), cost: numeral(0.0), total: numeral(0.0) }
      return state.push(newLineItem);
    
    default: 
      return state;
  }
}
