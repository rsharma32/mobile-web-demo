import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import ButtonStyle2 from './ButtonStyle2'
import ButtonStyle3 from './ButtonStyle3'
import ButtonStyle4 from './ButtonStyle4'
import Img from './Img';
import messages from './messages';
import Graph from 'components/Assests/graph-analysis.svg';
import User from 'components/Assests/user-with-headset-silhouette.svg';
import Bot from 'components/Assests/bot.svg';
import Other from 'components/Assests/other.svg';

function TechBody() {
    return (
      <div>
        <Align>
          <ButtonStyle onClick={() => console.log('test')} to="/tech-support/talk-to-an-agent">
            <Img src={Graph} alt="analytics - Logo"/>
            <FormattedMessage {...messages.analytics} />

          </ButtonStyle>
          <ButtonStyle2 onClick={() => console.log('test')} to="/tech-support/talk-to-an-agent">
            <Img src={User} alt="demand-shifting - Logo"/>
            <FormattedMessage {...messages.demand} />
          </ButtonStyle2>
          <ButtonStyle3 onClick={() => console.log('test')} to="/tech-support/talk-to-an-agent">
            <Img src={Bot} alt="service-bot - Logo"/>
            <FormattedMessage {...messages.serviceBot} />
          </ButtonStyle3>
          <ButtonStyle4 onClick={() => console.log('test')} to="/tech-support/talk-to-an-agent">
            <Img src={Other} alt="customer- - Logo"/>
            <FormattedMessage {...messages.customer} />
          </ButtonStyle4>
        </Align>
      </div>
    );
  }
  export default TechBody;