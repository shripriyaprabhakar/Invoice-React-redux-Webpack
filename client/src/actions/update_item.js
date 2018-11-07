import { UPDATE_LINE_ITEM } from './types';

export default function updateThisItem(id, lineItem) {
  return dispatch => {
    dispatch(updateLineItem(id, lineItem))
  }
}


export function updateLineItem(id, lineItem) {
  return {
    type: 'UPDATE_LINE_ITEM',
    lineItemId: id,
    lineItem: lineItem
  }
}

  

