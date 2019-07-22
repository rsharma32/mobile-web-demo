import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import ButtonStyle1 from './ButtonStyle1'
import ButtonStyle2 from './ButtonStyle2'
import Img from './Img';
import messages from './messages';
import Help from 'components/Assests/help.svg';
import Signal from 'components/Assests/signal.svg';
import Document from 'components/Assests/document.svg';


function Body() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/services/tech-support">
            <Img src={Signal} alt="tech-support - Logo"/>
            <FormattedMessage {...messages.techSupport} />

          </ButtonStyle>
          <ButtonStyle1 onClick={() => console.log('test')} to="/services/billing-account">
            <Img src={Document} alt="billing-account-services - Logo"/>
            <FormattedMessage {...messages.billingAccount}/>
          </ButtonStyle1>
          <ButtonStyle2 onClick={() => console.log('test')} to="/services/general-questions/talk-to-an-agent">
            <Img src={Help} alt="general-questions - Logo"/>
            <FormattedMessage {...messages.generalQuestions} />
          </ButtonStyle2>
        </Align>
      </div>
    );
  }
  
  export default Body;