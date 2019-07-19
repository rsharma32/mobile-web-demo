/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Find from './find.svg';
import Img from './Img.js'


export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <Header />
      <ListItem>
        <H1>
          <Img src={Find} alt="find - Logo"/>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <FormattedMessage {...messages.scaffoldingHeader} />
        </List>
      </ListItem>
    </div>
  );
}
