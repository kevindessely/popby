import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
  View, Icon, Title,
  Subtitle, Image, Tile,
  Overlay, Heading, Text, Spinner,
} from '@shoutem/ui';


import Button from './components/Button';
import Cover from './components/Cover';
import SliderNavigation from './components/SliderNavigation';
import IMG_LAND_ROVER from '../assets/images/land_rover.jpg';
import IMG_WINDOW_TO_THE_WORLD from '../assets/images/window_to_the_world.jpg';
import IMG_SNOW_MOUNTAIN from '../assets/images/snow_mountain.jpg';
import IMG_ROAD_TRIP from '../assets/images/road_trip.jpg';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          key: 'taiwan',
          title: 'Taiwan',
          description: '24 places to visit',
          image: IMG_WINDOW_TO_THE_WORLD,
        },
        {
          key: 'switzerland',
          title: 'Switzerland',
          description: 'unbelievably stunning',
          image: IMG_SNOW_MOUNTAIN,
        },
        {
          key: 'australia',
          title: 'Australia',
          description: 'amazingly fun',
          image: IMG_ROAD_TRIP,
        },
      ],
    };
  }

  _onLayout = ({ nativeEvent: { layout } }) => {
    const { width, height } = layout;

    this.setState({ exploreBody: layout });
  }

  _renderCountry = ({ item: country, index }) => {
    const { title, description, image } = country;
    const { exploreBody: { height, width } } = this.state;

    return (
      <View
        style={{ paddingRight: 20, paddingLeft: index === 0 ? 20 : 0 }} // find alternative like `classnames`
      >
        <Image
          style={{height: height, width: width - 80, borderRadius: 10}}
          source={image}
        >
          <View
            style={{position: 'absolute', bottom: 0, left: 0, paddingLeft: 20, paddingBottom: 20}}
          >
              <Tile styleName="clear">
                <Title style={{color: '#FFFFFF'}}>{ title }</Title>
                <Subtitle style={{color: '#FFFFFF'}}>{ description }</Subtitle>
              </Tile>
          </View>
        </Image>
      </View>
    );
  }

  render() {
    const { countries, exploreBody } = this.state;

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
              onLayout={this._onLayout}
            >
              { !exploreBody && <Spinner />}
              {
                exploreBody &&
                <FlatList
                  horizontal
                  data={countries}
                  renderItem={this._renderCountry}
                />
              }
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
