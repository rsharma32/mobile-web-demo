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

import { tsPropertySignature } from '@babel/types';
import Img from './Img';
import Banner from './banner.jpg';

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

export default Header;
