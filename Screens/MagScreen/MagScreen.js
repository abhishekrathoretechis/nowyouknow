import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/Headers';
import {
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const MagScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Headers quiz quizText={'Quiz'} />
      <View style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}>
        <Image source={require('../../assets/Images/Frame1.png')} />
      </View>
      <View style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}>
        <Image source={require('../../assets/Images/Frame2.png')} />
      </View>
      <TouchableOpacity
        style={{marginTop: responsiveScreenHeight(2), alignSelf: 'center'}}>
        <Image source={require('../../assets/Images/Frame3.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default MagScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
