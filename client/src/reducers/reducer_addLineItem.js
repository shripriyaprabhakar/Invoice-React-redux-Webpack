import { ADD_LINE_ITEM } from '../actions/index';


export function lineItemsReducer (state = List(), action) {
  switch(action.type) {
    case 'ADD_LINE_ITEM':
      let newLineItem = Map({ cid: uuid.v4(), description: null, quantity: numeral(0), cost: numeral(0.0), total: numeral(0.0) })
      return state.push(newLineItem);
    case 'DELETE_LINE_ITEM':
      var newLineItems = state.filterNot((lineItem) => {
        return lineItem.get('cid') == action.lineItemId;
      });
      return newLineItems
    case 'UPDATE_LINE_ITEM':
      let lineItem = state.find((lineItem) => {
        return lineItem.get('cid') == action.lineItemId;
      })
      let index = state.findIndex((lineItem) => {
        return lineItem.get('cid') == action.lineItemId;
      })
      return state.set(index, lineItemReducer(lineItem, action))
    default: 
      return state;
  }
}
