import { DELETE_LINE_ITEM } from '../actions/types';


let numeral = require('numeral');
let uuid = require('uuid');


export function lineItemsReducer (state = [], action){
  switch(action.type) {
    case 'DELETE_LINE_ITEM':
      var newLineItems = state.filterNot((lineItem) => {
        return lineItem.get('cid') == action.lineItemId;
      });
      return newLineItems
    
    default: 
      return state;
  }
}
