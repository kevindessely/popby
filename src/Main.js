import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon, Title, Subtitle, Image, Tile, Overlay, Heading, Text } from '@shoutem/ui';

import Button from './components/Button';
import Cover from './components/Cover';
import SliderNavigation from './components/SliderNavigation';
import IMG_LAND_ROVER from '../assets/images/land_rover.jpg';
import IMG_WINDOW_TO_THE_WORLD from '../assets/images/window_to_the_world.jpg';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Cover cover={IMG_LAND_ROVER} />
        <View
          style={StyleSheet.flatten(styles.elementsContainer)}
        >
          <View
            style={StyleSheet.flatten(styles.explore)}
          >
            <View
              style={StyleSheet.flatten(styles.exploreHeader)}
            >
              <View>
                <Title
                  style={StyleSheet.flatten(styles.exploreHeaderText)}
                >EXPLORE</Title>
                <Subtitle
                  style={StyleSheet.flatten(styles.exploreHeaderText)}
                >new amazing countries</Subtitle>
              </View>
            </View>
            <View
              style={StyleSheet.flatten(styles.exploreBody)}
            >
              <Image
                style={{height: '100%', width: '90%', borderRadius: 10}}
                source={IMG_WINDOW_TO_THE_WORLD}
              >
                <View
                  style={{position: 'absolute', bottom: 0, left: 0, paddingLeft: 20, paddingBottom: 20}}
                >
                    <Tile styleName="clear">
                      <Title style={{color: '#FFFFFF'}}>Taiwan</Title>
                      <Subtitle style={{color: '#FFFFFF'}}>24 places to visit</Subtitle>
                    </Tile>
                </View>
              </Image>
            </View>
            <View
              style={StyleSheet.flatten(styles.exploreFooter)}
            >
              <SliderNavigation />
              <SliderNavigation active />
              <SliderNavigation />
              <SliderNavigation />
            </View>
          </View>
          <View
            style={StyleSheet.flatten(styles.tabBars)}
          >
            <Icon name="home" style={{color: 'white'}} />
            <Icon name="photo" style={{color: 'white'}} />
            <Icon name="address" style={{color: 'white'}} />
            <Icon name="notifications" style={{color: 'white'}} />
            <Icon name="user-profile" style={{color: 'white'}} />
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
    backgroundColor: 'rgba(36,36,36,0.8)'
  },
  explore: {
    flexBasis: '93%',
  },
  exploreHeader: {
    flexBasis: '25%',
    justifyContent: 'space-around',
    marginLeft: 30,
  },
  exploreHeaderText: {
    color: '#FFFFFF',
  },
  exploreBody: {
    flexBasis: '67%',
    alignItems: 'center',
  },
  exploreFooter: {
    flexBasis: '8%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBars: {
    flexBasis: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
