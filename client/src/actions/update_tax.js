import { UPDATE_TAX } from './types';

export default function updateTaxItem(taxPercentage) {
  return dispatch => {
    dispatch(updateTax(taxPercentage))
  }
}


export function updateTax(taxPercentage) {
  return {
    type: 'UPDATE_TAX',
    taxPercentage: numeral(taxPercentage)
  }
}

  

