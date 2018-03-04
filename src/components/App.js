import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainSlider from './verticalSlider/MainSlider';
import TravelPhotos from './photos/TravelPhotos';
import PageNotFound from './PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            title='App'
            path='/'
            component={MainSlider}
            exact
          />
          <Route
            title='Travel Photos'
            path='/travel_photos'
            component={TravelPhotos}
            exact
          />
          <Route
            title='Page Not Found'
            component={PageNotFound}
          />
        </Switch>
      </Router>
    )
  }
}
