import { Helmet } from 'react-helmet';
import React from 'react';
import TechHeader from 'components/TechHeader';
import TechBody from 'components/TechBody';
import { Switch, Route } from 'react-router-dom';


export default function TechSupportPage() {

  return (
      <div>
          <TechHeader />
          <TechBody />
      </div>
      
  );
}