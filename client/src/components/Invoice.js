import React from 'react';
import { 
  Table,
  Button
} from 'antd';
let numeral = require('numeral');

import NumberFormat from 'react-number-format';
import { EditableCell } from './LineItems';
import { FromDetails } from './FromDetails';
import ToDetailsContainer from '../containers/ToDetailsContainer';
import LineItemsContainer from '../containers/LineItemsContainer';

const firstRowStyle = {
  paddingTop: 30,
  paddingBottom: 30
}

export class Invoice extends React.Component {

  constructor(props) {
    super(props);
  }

  onUpdateTax(event) {
    this.props.onUpdateTax(event.target.value)
  }

  render() {
    const { state, total } = this.props
    const totalDataSource = [{
      name: 'Subtotal',
      key: 'subTotal',
      value: total.subTotal
    }, {
      name: 'Tax (%)',
      key: 'taxPercentage',
      value: state.taxPercentage.input()
    }, {
      name: 'Total Tax',
      key: 'totalTax',
      value: total.totalTax
    },{
      name: 'Grand Total',
      key: 'grandTotal',
      value: total.grandTotal
    }]

    const totalColumns = [{
      title: "Name",
      key: "name",
      dataIndex: "name"
    }, {
      title: "Value",
      key: "value",
      dataIndex: "value",
      fixed: "right",
      render: (text, record, index) => {
        if(index != 1) {
          return numeral(text).format("$0,0.00")
        } else {
          return (
            <EditableCell 
              value={text}
              onChange={this.onUpdateTax.bind(this)}
              record={record} 
              property="value"
            />
          )
        }
      },
      width: 150
    }]

    return (
      <div>
     
            <h1>INVOICE</h1>
            <ToDetailsContainer/>
            <FromDetails/>
              <LineItemsContainer/>
              <Table dataSource={totalDataSource} columns={totalColumns} pagination={false} showHeader={false} size="middle" />
      </div>
    )
  }

}