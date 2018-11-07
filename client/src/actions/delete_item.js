import { DELETE_LINE_ITEM } from './types';

export default function deleteLineItem(lineItemId) {
  return dispatch => {
    dispatch(deleteLineItem(lineItemId))
  }
}


export function deleteLineItem (lineItemId) {
  return {
    type: 'DELETE_LINE_ITEM',
    lineItemId: lineItemId
  }
}


  

