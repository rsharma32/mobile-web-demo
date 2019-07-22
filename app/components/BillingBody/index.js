import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align';
import ButtonStyle from './ButtonStyle';
import ButtonStyle2 from './ButtonStyle2';
import ButtonStyle3 from './ButtonStyle3';
import ButtonStyle4 from './ButtonStyle4';
import Img from './Img';
import messages from './messages';
import Account from 'components/Assests/account-balance.svg';
import Adjustment from 'components/Assests/wallet-filled-money-tool.svg';
import Payments from 'components/Assests/credit-card.svg';
import Online from 'components/Assests/document.svg';

function BillingBody() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/billing-account/talk-to-an-agent">
            <Img src={Account} alt="account-balance - Logo"/>
            <FormattedMessage {...messages.accountBalance} />

          </ButtonStyle>
          <ButtonStyle2 onClick={() => console.log('test')} to="/billing-account/talk-to-an-agent">
            <Img src={Adjustment} alt="adjustments-credits - Logo"/>
            <FormattedMessage {...messages.adjustments} />
          </ButtonStyle2>
          <ButtonStyle3 onClick={() => console.log('test')} to="/billing-account/talk-to-an-agent">
            <Img src={Payments} alt="payments - Logo"/>
            <FormattedMessage {...messages.payments} />
          </ButtonStyle3>
          <ButtonStyle4 onClick={() => console.log('test')} to="/billing-account/talk-to-an-agent">
            <Img src={Online} alt="online-statements - Logo"/>
            <FormattedMessage {...messages.online} />
          </ButtonStyle4>
        </Align>
      </div>
    );
  }
  export default BillingBody;