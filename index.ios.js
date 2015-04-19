/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LoginPage = require("./LoginPage");
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class TopThatApp extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TopThat
        </Text>
        <Text style={styles.instructions}>
          Login to Challenge The World
        </Text>
          <React.NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: "Top That",
            component: LoginPage,
          }}/>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('TopThat', () => TopThatApp);
