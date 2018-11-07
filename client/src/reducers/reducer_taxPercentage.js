import { UPDATE_TAX } from '../actions/types';

let numeral = require('numeral');


export function taxPercentageReducer(state = numeral(0), action) {
  switch(action.type) {
    case 'UPDATE_TAX':
      return action.taxPercentage;
    default:
      return state;
  }
}


