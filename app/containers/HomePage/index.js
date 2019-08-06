/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';

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
import TalkConnect from 'components/TalkConnect';


import Header from 'components/Header';
import Header2 from 'components/Header2/index.js';
import { switchCase } from '@babel/types';
import ButtonStyle from '../../components/ServicesBody/ButtonStyle';
import ButtonStyle2 from '../../containers/FeaturePage/ButtonStyle';
import Input from '../../containers/FeaturePage/Input';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: 'services',
      serviceSelected: 'services',
      info: ''
    };
  }

  handleChange = event => {
    this.setState({ info: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {info} = this.state
    console.log(this.state.info)
    if(info === "") {
      alert(`Please fill out the required fields`)
      return this.updateSelected('smart-connect');
    }
    else {
      return this.updateSelected('talkAgent-smart-connect');
    }
  }

  updateSelected = (selection) => {
    this.setState({ selection });
  };

  updateService = (serviceSelected) => {
    this.setState({ serviceSelected });
  }


  checkSwitch = (param) => {
    switch(param) {

      case 'services':
        return (
          <div>
            <Header updateSelected={this.updateSelected} />
            <Body updateService={this.updateService} /> 
          </div>
        );
      case 'techSupport':
        return (
          <div>
            <TechHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <TechBody updateService={this.updateService} />
          </div>
        );
      case 'billing-account':
        return (
          <div>
            <BillingHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <BillingBody updateService={this.updateService} />
          </div>
        );
      case 'general-questions':
        return (
          <div>
            <TalkHeader updateService={this.updateService} />
            <TalkBody />
          </div>
        );
      
      case 'talkAgent-tech':
        return (
          <div>
            <TalkTech updateService={this.updateService}/>
            <TalkBody />
          </div>
        );
      
      case 'talkAgent-billing':
        return (
          <div>
            <TalkBilling updateService={this.updateService} />
            <TalkBody />
          </div>
        );

      case 'smart-connect':
        return (
          <div>
            <Header2 updateSelected={this.updateSelected} />
            <FeaturePage 
            info={this.state.info}
            onChange={this.handleChange}
            updateSelected={this.updateSelected}
            />
            <Input
            type="text"
            info={this.state.info}
            defaultValue=""
            value={this.state.info}
            placeholder="What are you looking for?" 
            onChange={this.handleChange}
            />
            <ButtonStyle2 onClick={this.handleSubmit}>
            Submit
            </ButtonStyle2>
            
          </div>
        );
      
      case 'talkAgent-smart-connect':
        return (
          <div>
            {alert(`Info: ${this.state.info}`)}
            <TalkConnect updateSelected={this.updateSelected} />
            <TalkBody />
          </div>
        );
    }
  }

  render () {
    console.log(this.state.selection)
    console.log(this.state.serviceSelected)
    
    if (this.state.selection === 'services') {
      return (this.checkSwitch(this.state.serviceSelected))
    } 
    else if (this.state.selection === 'smart-connect') {
      return (this.checkSwitch(this.state.selection))
    }
    else if (this.state.selection === 'talkAgent-smart-connect') {
      
      return (this.checkSwitch(this.state.selection))
    }
    
  }
}

