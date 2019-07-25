import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';

import Graph from 'components/assets/graph-analysis.svg';
import User from 'components/assets/user-with-headset-silhouette.svg';
import Bot from 'components/assets/bot.svg';
import Other from 'components/assets/other.svg';

let buttons = [
  {
    source: Graph,
    index: 1,
    name: "analytics - Logo",
    label: messages.analytics
  },
  {
    source: User,
    index: 2,
    name: "demand-shifting - Logo",
    label: messages.demand
  },
  {
    source: Bot,
    index: 3,
    name: "service-bot - Logo",
    label: messages.serviceBot
  },
  {
    source: Other,
    index: 4,
    name: "customer - Logo",
    label: messages.customer
  },
]

function renderButttons(){
  return (buttons.map((button, index) => {
    return (
      <ButtonStyle index={index} onClick={() => console.log('test')} to="/tech-support/talk-to-an-agent">
          <Img src={button.source} alt={button.name}/>
          <FormattedMessage {...button.label} />
      </ButtonStyle>
    );
  }));
}

function TechBody() {
    return (
      <Align>
        {renderButttons()}
      </Align>
    );
  }
  export default TechBody;