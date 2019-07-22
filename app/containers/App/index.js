/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Footer from 'components/Footer';
import Body from 'components/ServicesBody'
import GlobalStyle from '../../global-styles';
import TechSupportPage from 'containers/TechSupportPage/Loadable';
import BillingPage from 'containers/BillingPage/Loadable';
import TalkPage from 'containers/TalkPage/Loadable';
import TalkPageBilling from 'containers/TalkPageBilling/Loadable';
import TalkPageTech from 'containers/TalkPageTech/Loadable';

const AppWrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/services" component={HomePage} />
        <Route path="/smart-connect" component={FeaturePage} />
        <Route path="/services/tech-support" component={TechSupportPage} />
        <Route path="/services/billing-account" component={BillingPage} />
        <Route path="/services/general-questions/talk-to-an-agent" component={TalkPage} />
        <Route path="/tech-support/talk-to-an-agent" component={TalkPageTech} />
        <Route path="/billing-account/talk-to-an-agent" component={TalkPageBilling} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
