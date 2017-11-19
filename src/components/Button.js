import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@shoutem/ui';

export default ({ children, styleName, style }) => (
  <Button
    styleName={styleName}
    style={StyleSheet.flatten([ styles.button, style ])}
  >
    { children }
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
