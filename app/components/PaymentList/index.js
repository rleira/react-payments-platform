import React, { Component } from 'react';

const serviceBaseUrl = 'http://localhost:8084/api/payments';
const urlDefaultParams = 'results=10&nat=us';

class PaymentList extends Component {
  state = {
    filters : this.props.filters,
    payments: []
  };
  componentDidMount() {
    fetch(`${serviceBaseUrl}`)
      .then(results => results.json())
      .then(response => {
        console.log(response.payments);
        this.setState({ payments: response.payments });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters !== prevProps.filters) {
      this.updateList(this.props.filters);
    }
  }

  updateList(filters) {
    fetch(`${serviceBaseUrl}?currency=${filters.currency}&amount=${filters.amount}&transactionId=${filters.transactionId}&merchantId=${filters.merchantId}`)
      .then(results => results.json())
      .then(response => {
        console.log(response.payments);
        this.setState({ payments: response.payments });
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <span>Payments List</span>
        </header>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Merchant Id</th>
            </tr>
          </thead>
          <tbody>
          {this.state.payments.map(payment => {
            return (
              <tr key={payment.id}>
                <td>{payment.currency}</td>
                <td>{payment.amount}</td>
                <td>{payment.transaction_id}</td>
                <td>{payment.merchant_id}</td>
              </tr>
            );
          })}
          </tbody>
      </table>
      </div>
    );
  }
}

export default PaymentList;
