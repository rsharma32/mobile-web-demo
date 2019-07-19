import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';
import Help from './help.svg';
import Signal from './signal.svg';
import Document from './document.svg';


function Body() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/services/tech-support">
            <Img src={Signal} alt="tech-support - Logo"/>
            <FormattedMessage {...messages.techSupport} />

          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/services/billing-account">
            <Img src={Document} alt="billing-account-services - Logo"/>
            <FormattedMessage {...messages.billingAccount} />
          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Help} alt="general-questions - Logo"/>
            <FormattedMessage {...messages.generalQuestions} />
          </ButtonStyle>
        </Align>
      </div>
    );
  }
  
  export default Body;