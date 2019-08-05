import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align';
import ButtonStyle from './ButtonStyle';
import Img from './Img';
import messages from './messages';

import Account from 'components/assets/account-balance.svg';
import Adjustment from 'components/assets/wallet-filled-money-tool.svg';
import Payments from 'components/assets/credit-card.svg';
import Online from 'components/assets/document.svg';

let buttons = [
  {
    source: Account,
    index: 1,
    name: "account-balance - Logo",
    label: messages.accountBalance,
    propName: 'talkAgent-billing'
  },
  {
    source: Adjustment,
    index: 2,
    name: "adjustment - Logo",
    label: messages.adjustments,
    propName: 'talkAgent-billing'
  },
  {
    source: Payments,
    index: 3,
    name: "payments - Logo",
    label: messages.payments,
    propName: 'talkAgent-billing'
  },
  {
    source: Online,
    index: 4,
    name: "online-statements - Logo",
    label: messages.online,
    propName: 'talkAgent-billing'
  },
]

export default class BillingBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderButton = () => {
    return (buttons.map((button, index) => {
      return (
        <ButtonStyle key={button.index} onClick={() => this.props.updateService(button.propName)}>
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
