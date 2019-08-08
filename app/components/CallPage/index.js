import React from 'react';

import A from './A';
import Img3 from './Img3';
import Img4 from './Img4';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';
import T from './Text';
import Align from './Align';
import Align2 from './Align2';
import B from './B';
import Img2 from './Img2';
import Arrow1 from 'components/assets/left-arrow-1.svg';

export default class CallPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div>
        <A>
            <ButtonStyle onClick={() => this.props.updateService('general-questions')}>
                <Img3 src={Arrow3} alt="arrow-3 - Logo"/> 
            </ButtonStyle>
            <D>Schedule a Call</D>
        </A>
        <T>Please select the time you want to talk with one of our agents.</T>
        <Align>
            <B>Next Available Time: 2 min</B>
            <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align>
        <T>If this time doesn't work for you, here's some recommended times for you to connect with an agent!</T>
        <Align2>
            <B>3:00pm (30 min from now)</B>
            <Img2 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align2>
        <Align2>
            <B>4:30pm (2 hrs from now)</B>
            <Img4 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align2>
        <Align2>
            <B>5:00pm (3 hrs from now)</B>
            <Img4 src={Arrow1} alt="arrow-1 - Logo"/>
        </Align2>
      </div>
    );
  }
}
