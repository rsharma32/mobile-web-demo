/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Body from 'components/ServicesBody';
import FeaturePage from 'containers/FeaturePage';

import TechHeader from 'components/TechHeader';
import TechBody from 'components/TechBody';
import BillingHeader from 'components/BillingHeader';
import BillingBody from 'components/BillingBody';
import TalkHeader from 'components/TalkHeader';
import TalkBody from 'components/TalkBody';
import TalkTech from 'components/TalkTech';
import TalkBilling from 'components/TalkBilling';


import Header from 'components/Header';
import Header2 from 'components/Header2/index.js';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: 'services',
      serviceSelected: 'services'
    };
  }

  updateSelected = (selection) => {
    this.setState({ selection });
  };

  updateService = (serviceSelected) => {
    this.setState({ serviceSelected });
  }

  render () {
    console.log(this.state.selection)
    console.log(this.state.serviceSelected)
    if (this.state.selection === 'services') {
      if (this.state.serviceSelected === 'services') {
        return (
          <div>
            <Header updateSelected={this.updateSelected} />
            <Body updateService={this.updateService} /> 
          </div>
        );
      }
      else if (this.state.serviceSelected === 'techSupport') {
        return (
          <div>
            <TechHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <TechBody updateService={this.updateService} />
          </div>
        );
      }
      else if (this.state.serviceSelected === 'billing-account') {
        return (
          <div>
            <BillingHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <BillingBody updateService={this.updateService} />
          </div>
        );
      }
      else if (this.state.serviceSelected === 'general-questions') {
        return (
          <div>
            <TalkHeader updateService={this.updateService} />
            <TalkBody />
          </div>
        );
      }
      else if (this.state.serviceSelected === 'talkAgent-tech') {
        return (
          <div>
            <TalkTech updateService={this.updateService}/>
            <TalkBody />
          </div>
        );
      }
      else if (this.state.serviceSelected === 'talkAgent-billing') {
        return (
          <div>
            <TalkBilling updateService={this.updateService} />
            <TalkBody />
          </div>
        );
      }

    } 
    else if (this.state.selection === 'smart-connect') {
        return (
          <div>
            <Header2 updateSelected={this.updateSelected} />
            <FeaturePage /> 
          </div>
        );
      }
  }
}

