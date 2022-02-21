import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-util';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Hello World</Text>
      </View>
      <View style={styles.footer} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    alignItems: 'center',
    backgroundColor: '#150578',
    paddingTop: getStatusBarHeight(true),
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  footer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    backgroundColor: '#150578',
    bottom: getBottomSpace(),
  }
});
