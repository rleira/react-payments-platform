/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FiltersSelector from 'components/FiltersSelector';
import PaymentList from 'components/PaymentList';

export default class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.state = {filters : {}};
  }

  handleFiltersChange(newFilters) {
    this.setState({filters : newFilters});
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <FiltersSelector onFiltersChange={this.handleFiltersChange} />
        <PaymentList filters={this.state.filters}/>
      </div>
    );
  }
}
