import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Title, Subtitle, View, Text } from '@shoutem/ui';

import Cover from './components/Cover';
import Button from './components/Button';

export default class App extends Component {
  render() {
    return (
      <View>
        <Cover />
        <View
          style={StyleSheet.flatten(styles.elementsContainer)}
        >
          <View
            style={StyleSheet.flatten(styles.headline)}
          >
            <Title>EXPLORE</Title>
            <Subtitle>the world is your oyster</Subtitle>
          </View>
          <View
            style={StyleSheet.flatten(styles.buttonGroup)}
          >
            <View styleName="horizontal">
              <Button
                styleName="confirmation clear"
                style={StyleSheet.flatten(styles.buttons)}
              >
                <Text style={StyleSheet.flatten(styles.buttonsText)}>SIGN IN</Text>
              </Button>

              <Button
                styleName="confirmation clear"
                style={StyleSheet.flatten(styles.buttons)}
              >
                <Text style={StyleSheet.flatten(styles.buttonsText)}>SIGN UP</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  elementsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  headline: {
    paddingTop: 72,
    paddingLeft: 30,
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  buttonsText: {
    color: '#FFFFFF',
  },
});
