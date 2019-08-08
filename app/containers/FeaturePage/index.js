/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import Find from 'components/assets/find.svg';
import Img from './Img.js';

export default class FeaturePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderPage = () => {
    return (
        <ListItem>
          <H1>
            <Img src={Find} alt="find - Logo"/>
            <FormattedMessage {...messages.header} />
          </H1>
          <List>
            <FormattedMessage {...messages.description} />
          </List>
          
        </ListItem>
    );
  }


  render () {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}
