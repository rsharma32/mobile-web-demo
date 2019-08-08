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
import TalkTech from 'components/TalkTech';
import TalkBilling from 'components/TalkBilling';
import TalkConnect from 'components/TalkConnect';
import CallPage from 'components/CallPage';
import CallPageTech from 'components/CallPageTech';
import CallPageBilling from 'components/CallPageBilling';
import CallPageSmartConnect from 'components/CallPageSmartConnect';

import Header from 'components/Header';
import Header2 from 'components/Header2/index.js';
import ButtonStyle2 from '../../containers/FeaturePage/ButtonStyle';
import Input from '../../containers/FeaturePage/Input';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: 'services',
      serviceSelected: 'services',
      info: '',
      finalService: ''
    };
  }

  handleChange = (event) => {
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
      this.updateFinalService('Smart Connect');
      return this.updateSelected('talkAgent-smart-connect');
    }
  }

  //selection between services or smart-connect
  updateSelected = (selection) => {
    this.setState({ selection });
  };

  //all the services provided
  updateService = (serviceSelected) => {
    this.setState({ serviceSelected });
  }


  //saves the selection to be displayed at the call page
  updateFinalService = (finalService) => {
    this.setState({ finalService });
  }

  //comparing the prop name to display the right page
  checkSwitch = (param) => {
    switch(param) {

      case 'services':
        return (
          <div>
            <Header updateSelected={this.updateSelected} />
            <Body updateService={this.updateService} updateFinalService={this.updateFinalService}/> 
          </div>
        );
      case 'techSupport':
        return (
          <div>
            <TechHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <TechBody updateService={this.updateService} updateFinalService={this.updateFinalService}/>
          </div>
        );
      case 'billing-account':
        return (
          <div>
            <BillingHeader updateService={this.updateService} updateSelected={this.updateSelected} />
            <BillingBody updateService={this.updateService} updateFinalService={this.updateFinalService}/>
          </div>
        );
      case 'general-questions':
        return (
          <div>
            <TalkHeader updateService={this.updateService} />
          </div>
        );
      
      case 'talkAgent-tech':
        return (
          <div>
            <TalkTech updateService={this.updateService}/>
          </div>
        );
      
      case 'talkAgent-billing':
        return (
          <div>
            <TalkBilling updateService={this.updateService} />
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
            <TalkConnect updateService={this.updateService} updateSelected={this.updateSelected}/>
          </div>
        );
      case 'call-page':
        return (
          <div>
            <CallPage updateService={this.updateService}/>
            {alert(`Service Selected: ${this.state.finalService}`)}
          </div>
        );
      case 'call-page-tech':
        return (
          <div>
            <CallPageTech updateService={this.updateService}/>
            {alert(`Service Selected: ${this.state.finalService}`)}
          </div>
        );
      case 'call-page-billing':
        return (
          <div>
            <CallPageBilling updateService={this.updateService}/>
            {alert(`Service Selected: ${this.state.finalService}`)}
          </div>
        );
      case 'call-page-connect':
        return (
          <div>
            <CallPageSmartConnect updateService={this.updateService} updateSelected={this.updateSelected}/>
            {alert(`Service Selected: ${this.state.finalService} - ${this.state.info}`)}
          </div>
        );
    }
  }

  render () {
    console.log(this.state.selection)
    console.log(this.state.serviceSelected)
    console.log(this.state.finalService)

    if (this.state.selection === 'services') {
      return (this.checkSwitch(this.state.serviceSelected))
    } 
    else if (this.state.selection === 'smart-connect' || 'talkAgent-smart-connect' || 'call-page-connect') {
      return (this.checkSwitch(this.state.selection))
    }
  }
}

