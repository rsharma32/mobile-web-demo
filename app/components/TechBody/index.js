import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';
import Graph from './graph-analysis.svg';
import User from './user-with-headset-silhouette.svg';
import Bot from './bot.svg';
import Other from './other.svg';

function TechBody() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Graph} alt="analytics - Logo"/>
            <FormattedMessage {...messages.analytics} />

          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={User} alt="demand-shifting - Logo"/>
            <FormattedMessage {...messages.demand} />
          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Bot} alt="service-bot - Logo"/>
            <FormattedMessage {...messages.serviceBot} />
          </ButtonStyle>
          <ButtonStyle onClick={() => console.log('test')} to="/talk-to-an-agent">
            <Img src={Other} alt="customer- - Logo"/>
            <FormattedMessage {...messages.customer} />
          </ButtonStyle>
        </Align>
      </div>
    );
  }
  export default TechBody;