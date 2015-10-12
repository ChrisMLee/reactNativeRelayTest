'use strict';
require ('../relay/relay');
require('react-native-browser-polyfill');
import React from 'react-native';
import Relay from 'react-relay';

// var Relay = require('');
import App from './components/App';
import AppHomeRoute from './AppHomeRoute';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

//causes invariant violation
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);

var reactNativeRelayTest = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});

// 561bf1bc7b0eb27c1a560e89

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

React.AppRegistry.registerComponent('reactNativeRelayTest', () => reactNativeRelayTest);