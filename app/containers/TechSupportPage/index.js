import React from 'react';
import TechHeader from 'components/TechHeader';
import TechBody from 'components/TechBody';

export default class TechSupportPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.state.selection);
    console.log(this.state.serviceSelected);
    return (
      <div>
        <TechHeader updateSelection={this.updateSelection} />
        <TechBody updateService={this.updateService}/>
      </div>
    );
  }
}