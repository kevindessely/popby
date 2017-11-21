import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { View } from '@shoutem/ui';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default ({ cover }) => (
  <View
    style={styles.container}
  >
    <Image
      resizeMode="cover"
      source={cover}
      style={styles.background}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  background: {
    width: WIDTH,
    height: HEIGHT,
  },
});
