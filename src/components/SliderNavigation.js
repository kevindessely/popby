import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@shoutem/ui';

const SliderNavigation = ({ active }) => (
  <View
    style={
      Object.assign( // consider using `classnames` or something similar for RN
        styles,
        {
          width: active ? 30 : 15,
          backgroundColor: `rgba(255, 255, 255, ${active ? '1.0' : '0.2'})`,
        }
      )
    }
  />
);

const styles = {
  height: 3,
  marginLeft: 10,
  marginRight: 10,
};

SliderNavigation.defaultProps = {
  active: false,
};

export default SliderNavigation;
