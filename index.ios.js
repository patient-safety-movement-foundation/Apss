import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
  WebView,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


import database from './database.json';

class MainScreen extends Component {
  static navigationOptions = {
   title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'http://patientsafetymovement.org/challenges-solutions/actionable-patient-safety-solutions-apss/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
    margin: 10,
    color: '#333'
  }
});

class ChallengesScreen extends Component {
  static navigationOptions = {
   title: 'Challenges',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {JSON.stringify(database)}
        </Text>
      </View>
    );
  }
}

const Apss = StackNavigator({
  Main: {screen: MainScreen},
  Challenges: {screen: ChallengesScreen}
});

AppRegistry.registerComponent('Apss', () => Apss);
