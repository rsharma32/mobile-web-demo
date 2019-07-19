import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';
import Account from './account-balance.svg';
import Adjustment from './wallet-filled-money-tool.svg';
import Payments from './credit-card.svg';
import Online from './document.svg';

function BillingBody() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Account} alt="account-balance - Logo"/>
            <FormattedMessage {...messages.accountBalance} />

          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Adjustment} alt="adjustments-credits - Logo"/>
            <FormattedMessage {...messages.adjustments} />
          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Payments} alt="payments - Logo"/>
            <FormattedMessage {...messages.payments} />
          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Online} alt="online-statements - Logo"/>
            <FormattedMessage {...messages.online} />
          </ButtonStyle>
        </Align>
      </div>
    );
  }
  export default BillingBody;