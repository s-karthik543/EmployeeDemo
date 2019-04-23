import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Store from './src/Store'
import AppNavigator from './src/AppNavigator';

export default class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}
