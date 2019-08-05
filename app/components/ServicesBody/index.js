import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';

import Help from 'components/assets/help.svg';
import Signal from 'components/assets/signal.svg';
import Document from 'components/assets/document.svg';

let buttons = [
  {
    source: Signal,
    index: 1,
    name: "tech-support - Logo",
    label: messages.techSupport,
    stateName: "techSupport",
  },
  {
    source: Document,
    index: 2,
    name: "billing-account-services - Logo",
    label: messages.billingAccount,
    stateName: 'billing-account'
  },
  {
    source: Help,
    index: 3,
    name: "general-questions - Logo",
    label: messages.generalQuestions,
    stateName: 'general-questions'
  },
]


export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderButton = () => {
    return (buttons.map((button, index) => {
      return (
        <ButtonStyle key={button.index} onClick={() => this.props.updateService(button.stateName)}>
            <Img src={button.source} alt={button.name}/>
            <FormattedMessage {...button.label} />
        </ButtonStyle>
      );
    }));
  }

  render () {
    return (
      <Align>
        {this.renderButton()}
      </Align>
    );
}
}