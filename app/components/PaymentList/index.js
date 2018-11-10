import React, { Component } from 'react';

const serviceBaseUrl = 'https://randomuser.me/api/';
const urlDefaultParams = 'results=10&nat=us';

class PaymentList extends Component {
  state = {
    filters : this.props.filters,
    payments: []
  };
  componentDidMount() {
    fetch(`${serviceBaseUrl}?${urlDefaultParams}`)
      .then(results => results.json())
      .then(response => {
        this.setState({ payments: response.results });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters !== prevProps.filters) {
      this.updateList(this.props.filters);
    }
  }

  updateList(filters) {
    fetch(`${serviceBaseUrl}?${urlDefaultParams}&currency=${filters.currency}&amount=${filters.amount}&transactionId=${filters.transactionId}&merchantId=${filters.merchantId}`
    )
      .then(results => results.json())
      .then(response => {
        this.setState({ payments: response.results });
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
          {this.state.payments.map(user => {
            return (
              <tr key={user.id.value}>
                <td>{user.name.first}</td>
                <td><img src={user.picture.thumbnail} alt="" /></td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
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
