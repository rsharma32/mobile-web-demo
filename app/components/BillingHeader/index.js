import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import T from './Text';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

import Img3 from './Img3';
import D from './D';
import Arrow3 from './left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';

function BillingHeader() {
  return (
    <div>
      <A>
          <ButtonStyle onClick={() => console.log('test')} to="/services">
              <Img3 src={Arrow3} alt="arrow-3 - Logo"/> 
          </ButtonStyle>
          <D>Billing & Account Services</D>
      </A>
      <T>Select a topic for an Agent.</T>
      <NavBar>
        <HeaderLink onClick={() => console.log('test')} to="/services">
          <FormattedMessage {...messages.services} />
        </HeaderLink>
        <HeaderLink onClick={() => console.log('test')} to="/smart-connect">
          <FormattedMessage {...messages.smart_connect} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default BillingHeader;