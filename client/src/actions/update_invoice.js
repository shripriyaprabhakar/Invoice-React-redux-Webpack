import { UPDATE_INVOICE_NUMBER } from './types';

export default function updateThisInvoice(newNumber) {
  return dispatch => {
    dispatch(updateInvoiceNumber(newNumber))
  }
}


export function updateInvoiceNumber(newNumber) {
  return {
    type: 'UPDATE_INVOICE_NUMBER',
    number: newNumber
  }
}
  

