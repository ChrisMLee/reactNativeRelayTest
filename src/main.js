'use strict';

require('react-native-browser-polyfill');
import React from 'react-native';
import Relay from '../relay/relay';

// var Relay = require('');
import App from './components/App';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reactNativeRelayTest = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});

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