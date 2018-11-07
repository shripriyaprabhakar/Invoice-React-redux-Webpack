import { combineReducers } from 'redux';
import AddItemReducer from './reducer_addLineItem';
import DelLineItemReducer from './reducer_delLineItem';
import TaxPercentageReducer from './reducer_taxPercentage';
import UpdateLineItemReducer from './reducer_updateLineItem';


const rootReducer = combineReducers({
  addItem: AddItemReducer,
  delItem: DelLineItemReducer,
  taxPer: TaxPercentageReducer,
  updateItem: UpdateLineItemReducer

});

export default rootReducer;
