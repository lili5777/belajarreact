import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Artikel = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
    </View>
  );
};

export default Artikel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
