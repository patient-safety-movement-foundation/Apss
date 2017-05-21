import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          The Movement is not just about information, it is about action! By addressing new challenges and forming Actionable Patient Safety Solution (APSS) we believe we can reduce the number of preventable deaths in hospitals to ZERO by 2020.
        </Text>
        <Text style={styles.welcome}>
          We currently have developed 13 APSS that are ready for download. Each year, new patient safety challenges are nominated and voted on at the Midyear Planning Meeting and become safety topics that are prominent at our annual Summit.
        </Text>
        <Image source={require('./images/dotman.png')} style={{width: 240, height: 240}} />
        <Button
          title="Go to Challenges"
          onPress={() =>
            navigate('Challenges')
          }
        />
      </View>
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
