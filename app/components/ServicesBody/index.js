import React from 'react';
import { FormattedMessage } from 'react-intl';

import Align from './Align'
import ButtonStyle from './ButtonStyle'
import Img from './Img';
import messages from './messages';

import Help from 'components/assets/help.svg';
import Signal from 'components/assets/signal.svg';
import Document from 'components/assets/document.svg';

let buttons = [
  {
    source: Signal,
    index: 1,
    name: "tech-support - Logo",
    label: messages.techSupport,
    link: "/services/tech-support"
  },
  {
    source: Document,
    index: 2,
    name: "billing-account-services - Logo",
    label: messages.billingAccount,
    link: "/services/billing-account"
  },
  {
    source: Help,
    index: 3,
    name: "general-questions - Logo",
    label: messages.generalQuestions,
    link: "/services/general-questions/talk-to-an-agent"
  },
]

function renderButtons() {
  return (buttons.map((button, index) => {
    return (
      <ButtonStyle index={index} onClick={() => console.log('test')} to={button.link}>
          <Img src={button.source} alt={button.name}/>
          <FormattedMessage {...button.label} />
      </ButtonStyle>
    );
  }))
}

function Body() {
    return (
      <Align>
        {renderButtons()}
      </Align>
    );
  }
  
  export default Body;