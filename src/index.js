import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Examples } from '@shoutem/ui';

import Splash from './Splash';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        {/* <Splash /> */}
        <Main />
        {/* <Examples /> */}
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
});
