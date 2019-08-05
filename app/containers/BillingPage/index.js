import { Helmet } from 'react-helmet';
import React from 'react';
import BillingHeader from 'components/BillingHeader';
import BillingBody from 'components/BillingBody';
import { Switch, Route } from 'react-router-dom';


export default class BillingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.state.selection);
    console.log(this.state.serviceSelected);
    return (
      <div>
        <BillingHeader updateSelection={this.updateSelection} />
        <BillingBody updateService={this.updateService}/>
      </div>
    );
  }
}