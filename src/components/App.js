import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import VerticalSlider from './verticalSlider/VerticalSlider';

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <VerticalSlider selected={true} />
      </div>
    )
  }
}
