import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import T from './Text';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderLink2 from './HeaderLink2';
import messages from './messages';

import Img3 from './Img3';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';


function Header() {
  return (
    <div>
      <A>
          <ButtonStyle onClick={() => console.log('test')} to="/services">
              <Img3 src={Arrow3} alt="arrow-3 - Logo"/> 
          </ButtonStyle>
          <D>Visual Menu</D>
      </A>
      <T>How can we help you today?</T>
      <NavBar>
        <HeaderLink id="b1" onClick={() => console.log('test')} to="/services">
          <FormattedMessage {...messages.services} />
        </HeaderLink>
        <HeaderLink2 id="b2" onClick={() => console.log('test')} to="/smart-connect">
          <FormattedMessage {...messages.smart_connect} />
        </HeaderLink2>
      </NavBar>
    </div>
  );
}

export default Header;
