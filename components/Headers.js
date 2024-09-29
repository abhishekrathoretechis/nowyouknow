import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Headers = ({homeScreen, quiz, quizText}) => {
  return (
    <View>
      <View
        style={{
          height: responsiveScreenHeight(10),
          width: '100%',
          backgroundColor: '#F5BE00',
          flexDirection: 'row',
        }}>
        {homeScreen ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: responsiveScreenWidth(6),
              marginBottom: responsiveScreenHeight(4),
            }}>
            <View>
              <Image source={require('../assets/Images/threeDots.png')} />
            </View>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={require('../assets/Images/noti.png')} />
              <Image source={require('../assets/Images/message.png')} />
              <Image source={require('../assets/Images/save.png')} />
            </View>
          </View>
        ) : quiz ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: responsiveScreenWidth(6),
              marginBottom: responsiveScreenHeight(4),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Image source={require('../assets/Images/Back.png')} />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                }}>
                {quizText}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/Images/threeDotsWhite.png')} />
            </View>
          </View>
        ) : null}
      </View>
      <View
        style={{
          height: responsiveScreenHeight(4),
          borderRadius: 50,
          marginTop: responsiveScreenHeight(-4),
          marginBottom: responsiveScreenHeight(2.5),
          width: '88%',
          alignSelf: 'center',
          backgroundColor: '#FBE680',
        }}></View>
      <View
        style={{
          height: responsiveScreenHeight(6),
          borderRadius: 50,
          marginTop: responsiveScreenHeight(-4.5),
          width: '100%',
          backgroundColor: 'white',
        }}></View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({});
