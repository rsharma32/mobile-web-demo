import { Helmet } from 'react-helmet';
import React from 'react';
import BillingHeader from 'components/BillingHeader';
import BillingBody from 'components/BillingBody';
import { Switch, Route } from 'react-router-dom';


export default function BillingPage() {

  return (
    <div>
      <BillingHeader />
      <BillingBody />
    </div>
  );
}