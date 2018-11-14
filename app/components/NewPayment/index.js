import React, { Component } from 'react';

const newPaymentEndpoint = 'http://localhost:8084/api/payments';

class NewPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      amount: 0,
      transaction_id: '',
      merchant_id: ''
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleMerchantIdChange = this.handleMerchantIdChange.bind(this);
    this.handleTransactionIdChange = this.handleTransactionIdChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }

  handleCurrencyChange(event) {
    this.setState({currency: event.target.value});
  }

  handleMerchantIdChange(event) {
    this.setState({merchant_id: event.target.value});
  }

  handleTransactionIdChange(event) {
    this.setState({transaction_id: event.target.value});
  }

  handleSubmit(event) {
    fetch(newPaymentEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Currency:
            <input type="text" value={this.state.currency} onChange={this.handleCurrencyChange} />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input type="number" value={this.state.amount} onChange={this.handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Transaction:
            <input type="string" value={this.state.transaction_id} onChange={this.handleTransactionIdChange} />
          </label>
        </div>
        <div>
          <label>
            Merchant:
            <input type="string" value={this.state.merchant_id} onChange={this.handleMerchantIdChange} />
          </label>
        </div>

        <input type="submit" value="Submit Payment" />
      </form>
    );
  }
}

export default NewPayment;

