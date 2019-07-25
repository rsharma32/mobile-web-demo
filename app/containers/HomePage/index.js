/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import Header from 'components/Header';
import Body from 'components/ServicesBody';

export default function HomePage() {

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
