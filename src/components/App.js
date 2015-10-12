require ('../../relay/relay');
import React from 'react-native';
import Relay from 'react-relay';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//         	YURP
//         </Text>
//       </View>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        	{this.props.user.name}
        </Text>
        <Text>
        	{this.props.user.surname}
        </Text>
        <Text>
        	{this.props.user.team}
        </Text>
      </View>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id
        name
        surname
        team
      }
    `
  }
});

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