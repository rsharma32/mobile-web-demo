import React from 'react';

import A from './A';
import Img3 from './Img3';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';

import B from './B';
import C from './C';
import T from './Text';
import NavBar from './NavBar';
import Align from './Align';
import Align2 from './Align2';
import Call from 'components/assets/call-answer.svg';
import Chat from 'components/assets/chat.svg';
import Arrow1 from 'components/assets/left-arrow-1.svg';
import Img from './Img';
import Img2 from './Img2';
import MoreText from './MoreText'

export default class TalkTech extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div>
        <A>
            <ButtonStyle onClick={() => this.props.updateService('techSupport')}>
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
        <Align onClick={() => this.props.updateService('call-page-tech')}>
            <Img src={Call} alt="call - Logo"/>
            <MoreText>
                <B>Call</B>
                <C>(Est. Wait Time: ~ 5 min)</C>
            </MoreText>
            <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align>
        <Align2>
            <Img src={Chat} alt="chat - Logo"/>
            <MoreText>
                <B>Chat</B>
                <C>(Est. Wait Time: None)</C>
            </MoreText>
            <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align2>
      
      </div>
    );
  }
}
