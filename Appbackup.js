import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {icon2} from './assets/gambar';

const Artikel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Image source={icon2} style={styles.gambar} />
      </View>
    </View>
  );
};

export default Artikel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bg: {
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor: '#3eb29a',
    borderBottomEndRadius: wp(15),
    borderBottomStartRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambar: {
    width: wp('70%'),
    height: wp('70%'),
  },
});
