import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const HeaderSearch = ({headingText}) => {
  return (
    <View>
      <View
        style={{
          height: responsiveScreenHeight(10),
          width: '100%',
          backgroundColor: '#F5BE00',
          flexDirection: 'row',
        }}>
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
              {headingText}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/Images/threeDotsWhite.png')} />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          height: responsiveScreenHeight(4),
          borderRadius: 50,
          marginTop: responsiveScreenHeight(-4),
          marginBottom: responsiveScreenHeight(2.5),
          width: '88%',
          alignSelf: 'center',
          backgroundColor: '#FBE680',
        }}></View> */}
      <View
        style={{
          height: responsiveScreenHeight(6),
          borderRadius: 70,
          marginTop: responsiveScreenHeight(-4.5),
          width: '100%',
          backgroundColor: '#F5BE00',
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          width: '85%',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: responsiveScreenHeight(-3),
          borderRadius: 10, // Rounded corners
          borderWidth: 0.5,
          borderColor: '#ccc', // Border color
          // iOS shadow
          shadowColor: '#000',
          // shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android shadow
          elevation: 4,
        }}>
        <TextInput style={styles.textInput} placeholder="Search" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/Images/mic.png')} />
          <Image source={require('../assets/Images/filter.png')} />
        </View>
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    paddingHorizontal: responsiveScreenWidth(5),
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 16,
  },
});
