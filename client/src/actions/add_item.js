import { ADD_LINE_ITEM } from './types';

export default function addLineItem() {
  return dispatch => {
    dispatch(addLineItem())
  }
}


export function addLineItem() {
  return {
    type: 'ADD_LINE_ITEM'
  }
}

  

