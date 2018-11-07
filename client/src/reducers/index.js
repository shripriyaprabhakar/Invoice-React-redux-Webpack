import { combineReducers } from 'redux';
import addLineItem from './reducer_addLineItem';
import taxPercentage from './reducer_taxPercentage';
import updateLineItem from './reducer_updateLineItem';

const rootReducer = combineReducers({
  tax: taxPercentage,
  addLineItem: addLineItem,
  lineItem: updateLineItem
});

export default rootReducer;
