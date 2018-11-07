import { UPDATE_LINE_ITEM } from '../actions/index';


export function lineItemReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_LINE_ITEM':
      let quantity = action.lineItem.get('quantity')
      let cost = action.lineItem.get('cost')
      var newState = Map({
        cid: action.lineItem.get('cid'),
        total: numeral(quantity.value() * cost.value()),
        quantity: quantity,
        cost: cost,
        description: action.lineItem.get('description')
      })
      return newState;
    default:
      return state;
  }
}


