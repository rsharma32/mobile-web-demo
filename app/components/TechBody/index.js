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
    label: messages.analytics,
    propName: 'talkAgent-tech',
    userSelection: 'Tech Support - Analytics Dashboard'
  },
  {
    source: User,
    index: 2,
    name: "demand-shifting - Logo",
    label: messages.demand,
    propName: 'talkAgent-tech',
    userSelection: 'Tech Support - Demand Shifting'
  },
  {
    source: Bot,
    index: 3,
    name: "service-bot - Logo",
    label: messages.serviceBot,
    propName: 'talkAgent-tech',
    userSelection: 'Tech Support - Service Bot'
  },
  {
    source: Other,
    index: 4,
    name: "customer - Logo",
    label: messages.customer,
    propName: 'talkAgent-tech',
    userSelection: 'Tech Support - Customer Integration'
  },
]

export default class TechBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderButton = () => {
    return (buttons.map((button, index) => {
      return (
        <ButtonStyle key={button.index} onClick={() => {this.props.updateService(button.propName); this.props.updateFinalService(button.userSelection);}}>
            <Img src={button.source} alt={button.name}/>
            <FormattedMessage {...button.label} />
        </ButtonStyle>
      );
    }));
  }

  render () {
    return (
      <Align>
        {this.renderButton()}
      </Align>
    );
  }
}