import React from 'react';
import { connect } from 'react-redux';
import { addLineItem, updateTax } from '../actions/types';

import { Main } from '../components/Main';


const computeTotals = (lineItems, tax) => {
  let subTotal = lineItems.reduce((initial, lineItem) => {
    return numeral( (initial.value() || 0) + (lineItem.get('total').value() || 0) )
  }, numeral(0));
  let totalTax = numeral( subTotal.value() * tax.value()/100 )
  let grandTotal = numeral( subTotal.value() + totalTax.value() );
  return {
    subTotal,
    totalTax,
    grandTotal
  }
}


const mapStateToProps = (state) => {
  return {
    state: state,
    total: state.subTotal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateTax: (newTax) => {
      dispatch(updateTax(newTax))
    }
  }
}

let InvoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Invoice)

export default InvoiceContainer