/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import { Helmet } from 'react-helmet';
import React from 'react';
import Header from 'components/Header';
import Body from 'components/ServicesBody';
import { Switch, Route } from 'react-router-dom';



export default function HomePage() {

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
