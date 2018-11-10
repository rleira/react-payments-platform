import React, { Component } from 'react';

const serviceUrl = 'https://randomuser.me/api/?results=10&nat=us';

class PaymentList extends Component {
  state = { payments: [] };
  componentDidMount() {
    fetch(serviceUrl)
      .then(results => results.json())
      .then(response => {
        const payments = response.results;
        this.setState({ payments });
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
