import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import B from './B';
import C from './C';
import T from './Text';
import NavBar from './NavBar';
import Align from './Align'
import HeaderLink from './HeaderLink';
import Call from './call-answer.svg';
import Chat from './chat.svg';
import Arrow1 from './left-arrow-1.svg';
import Img from './Img';
import Img2 from './Img2';

import Img3 from './Img3';
import D from './D';
import Arrow3 from './left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';

import moreText from './moreText';

function TalkHeader() {
  return (
    <div>
      <A>
          <ButtonStyle onClick={() => console.log('test')} to="/services">
              <Img3 src={Arrow3} alt="arrow-3 - Logo"/> 
          </ButtonStyle>
          <D>Talk to an Agent</D>
      </A>
      <T>How do you want to talk?</T>
      <NavBar>
          Thank you for telling us a bit about your
          request. We will direct you to a support
          agent shortly. How do you want to talk
          to your agent?
      </NavBar>
      <Align>
        <Img src={Call} alt="call - Logo"/>
        <moreText>
            <B>Call</B>
            <C>(Est. Wait Time: ~ 5 min)</C>
        </moreText>
        <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
      </Align>
      <Align>
        <Img src={Chat} alt="chat - Logo"/>
        <moreText>
            <B>Chat</B>
            <C>(Est. Wait Time: None)</C>
        </moreText>
        <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
      </Align>
    </div>
  );
}

export default TalkHeader;