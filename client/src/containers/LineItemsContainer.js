import React from 'react';
import { connect } from 'react-redux';
import { addLineItem, updateLineItem } from '../actions/types';

import { Items } from '../components/Items';

const mapStateToProps = (state) => {
  return {
    items: state.lineItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLineItemAdd: () => {
      dispatch(addLineItem())
    },
    onLineItemUpdate: (id, lineItem) => {
      dispatch(updateLineItem(id, lineItem))
    }
  }
}

const LineItemsContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)

export default LineItemsContainer