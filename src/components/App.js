import React from 'react-native';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        	THATS LABY
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});