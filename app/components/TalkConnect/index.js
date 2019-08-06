import React from 'react';
import A from './A';
import Img from './Img';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';


export default class TalkConnect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render () {

    return (
      <div>
        <A>
            <ButtonStyle onClick={() => this.props.updateSelected('smart-connect')}>
                <Img src={Arrow3} alt="arrow-3 - Logo"/> 
            </ButtonStyle>
            <D>Talk to an Agent</D>
        </A>
      </div>
    );
  }
}