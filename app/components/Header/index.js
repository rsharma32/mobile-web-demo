import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import T from './T';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderLink2 from './HeaderLink2';
import messages from './messages';

import Img3 from './Img3';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <A>
            <ButtonStyle onClick={() => this.props.updateSelected('services')}>
                <Img3 src={Arrow3} alt="arrow-3 - Logo"/> 
            </ButtonStyle>
            <D>Visual Menu</D>
        </A>
        <T>How can we help you today?</T>
        <NavBar>
          <HeaderLink id="b1" onClick={() => this.props.updateSelected('services')}>
            <FormattedMessage {...messages.services} />
          </HeaderLink>
          <HeaderLink2 id="b2" onClick={() => this.props.updateSelected('smart-connect')}>
            <FormattedMessage {...messages.smart_connect} />
          </HeaderLink2>
        </NavBar>
      </div>
      );
  }
}



