import React from 'react';
import A from './A';
import Img from './Img';
import D from './D';
import Arrow3 from 'components/assets/left-arrow-3.svg';
import ButtonStyle from './ButtonStyle';


function TalkHeader() {
  return (
    <div>
      <A>
          <ButtonStyle onClick={() => console.log('test')} to="/services">
              <Img src={Arrow3} alt="arrow-3 - Logo"/> 
          </ButtonStyle>
          <D>Talk to an Agent</D>
      </A>
    </div>
  );
}

export default TalkHeader;