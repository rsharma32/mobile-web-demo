/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header2 from 'components/Header2';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import Find from 'components/assets/find.svg';
import Img from './Img.js';
import Input from './Input.js';
import ButtonStyle from './ButtonStyle.js';


export default function FeaturePage() {
  return (
    <div>
      <ListItem>
        <H1>
          <Img src={Find} alt="find - Logo"/>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <FormattedMessage {...messages.description} />
        </List>
        <Input
          type="text"
          placeholder="What are you looking for?" 
        />
        <ButtonStyle>Submit</ButtonStyle>
      </ListItem>
    </div>
  );
}
