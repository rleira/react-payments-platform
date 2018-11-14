import React, { Component } from 'react';

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      amount: 0,
      transactionId: '',
      merchantId: ''
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
    this.setState({merchantId: event.target.value});
  }

  handleTransactionIdChange(event) {
    this.setState({transactionId: event.target.value});
  }

  handleSubmit(event) {
    this.props.onFiltersChange(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Filter by currency:
            <input type="text" value={this.state.currency} onChange={this.handleCurrencyChange} />
          </label>
        </div>
        <div>
          <label>
            Filter by Amount:
            <input type="number" value={this.state.amount} onChange={this.handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Filter by Transaction:
            <input type="text" value={this.state.transactionId} onChange={this.handleTransactionIdChange} />
          </label>
        </div>
        <div>
          <label>
            Filter by Merchant:
            <input type="text" value={this.state.merchantId} onChange={this.handleMerchantIdChange} />
          </label>
        </div>

        <input type="submit" value="Filter" />
      </form>
    );
  }
}

export default CurrencySelector;
