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
    label: messages.accountBalance
  },
  {
    source: Adjustment,
    index: 2,
    name: "adjustment - Logo",
    label: messages.adjustments
  },
  {
    source: Payments,
    index: 3,
    name: "payments - Logo",
    label: messages.payments
  },
  {
    source: Online,
    index: 4,
    name: "online-statements - Logo",
    label: messages.online
  },
]

function renderButtons() {
  return (buttons.map((button, index) => {
    return (
      <ButtonStyle index={index} onClick={() => console.log('test')} to="/billing-account/talk-to-an-agent">
          <Img src={button.source} alt={button.name}/>
          <FormattedMessage {...button.label} />
      </ButtonStyle>
    );
  }
  ));
}

function BillingBody() {
    return (
      <Align>
        {renderButtons()}
      </Align>
      
    );
  }
  export default BillingBody;