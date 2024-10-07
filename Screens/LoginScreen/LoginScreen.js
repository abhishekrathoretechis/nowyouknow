import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/Feather';
import EyeOff from 'react-native-vector-icons/Feather';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Headers from '../../components/Headers';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [minutes, setMinutes] = useState(20);
  const [selected, setSelected] = useState('username');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <Headers />
      <View style={{alignSelf: 'center'}}>
        <Image source={require('../../assets/Images/logo.png')} />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          backgroundColor: '#043142',
          paddingVertical: 8,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginTop: responsiveScreenHeight(20),
        }}
        onPress={() => navigation.navigate('MyBottomTabNavigator')}>
        <Text style={styles.loginText}>Lets get started</Text>
      </TouchableOpacity>
      {/* <View
        style={{
          marginTop: responsiveScreenHeight(2),
          paddingHorizontal: responsiveScreenWidth(5),
        }}>
        <Text style={styles.heading}>Welcome Back...!</Text>
        <Text style={styles.subHeading}>
          Unlock Focused, Distraction-free Learning Login now
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: responsiveScreenWidth(5),
          marginTop: responsiveScreenHeight(2),
        }}>
        {/* <TouchableOpacity
          style={[
            styles.button,
            selected === 'username' && styles.selectedButton, // Apply selected styles if 'username' is selected
          ]}
          onPress={() => setSelected('username')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'username'
                ? styles.selectedText
                : styles.defaultText,
            ]}>
            Username
          </Text>
        </TouchableOpacity> */}

        {/* Mobile Number Button */}
        {/* <TouchableOpacity
          style={[
            styles.button,
            selected === 'mobile' && styles.selectedButton, // Apply selected styles if 'mobile' is selected
          ]}
          onPress={() => setSelected('mobile')}>
          <Text
            style={[
              styles.buttonText,
              selected === 'mobile' ? styles.selectedText : styles.defaultText,
            ]}>
            Mobile No
          </Text>
        </TouchableOpacity> */}
      </View>
      {selected === 'username' ? (
        <View>
          {/* <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username/Email"
              placeholderTextColor={'#999999'}
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                // backgroundColor: 'red',
                width: '80%',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            />
          </View> */}
          <View style={styles.inputContainerPassword}>
            {/* <TextInput
              placeholder="Password"
              placeholderTextColor={'#999999'}
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                // backgroundColor: 'red',
                width: '80%',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            /> */}
            {/* <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={{marginRight: 20}}>
              {passwordVisible ? (
                <Eye name="eye" size={24} color="#999999" />
              ) : (
                <EyeOff name="eye-off" size={24} color="#999999" />
              )}
            </TouchableOpacity> */}
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(0.5),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                value={isChecked}
                onValueChange={setIsChecked}
                tintColors={{true: '#007AFF', false: '#D3D3D3'}} // Customize colors for iOS
                boxType="square"
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.rememberText,
                  {textDecorationLine: 'underline'},
                ]}>
                Forgot Password?
              </Text>
            </View>
          </View> */}

          {/* <Text
            style={[
              styles.rememberText,
              {
                textAlign: 'center',
                color: '#043142',
                marginTop: responsiveScreenHeight(2),
              },
            ]}>
            Or continue with
          </Text> */}
          {/* <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                borderColor: '#043142',
                paddingHorizontal: responsiveScreenWidth(9),
                paddingVertical: responsiveScreenHeight(2),
                borderRadius: 15,
              }}>
              <Image source={require('../../assets/Images/google.png')} />
              <Text
                style={{
                  color: '#333333',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                borderColor: '#043142',
                paddingHorizontal: responsiveScreenWidth(9),
                paddingVertical: responsiveScreenHeight(2),
                borderRadius: 15,
              }}>
              <Image source={require('../../assets/Images/apple.png')} />
              <Text
                style={{
                  color: '#333333',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Apple
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Mobile No"
              placeholderTextColor={'#999999'}
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                // backgroundColor: 'red',
                width: '80%',
                paddingHorizontal: 20,
                paddingVertical: 10,
                textAlignVertical: 'center',
              }}
            />
          </View>
          {showOtp ? (
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="OTP"
                  placeholderTextColor={'#999999'}
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 18,
                    // backgroundColor: 'red',
                    width: '80%',
                    paddingHorizontal: 20,
                    textAlignVertical: 'center',
                    paddingVertical: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: responsiveScreenHeight(0.5),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    tintColors={{true: '#007AFF', false: '#D3D3D3'}} // Customize colors for iOS
                    boxType="square"
                  />
                  <Text style={styles.rememberText}>Remember me</Text> */}
                </View>
                <View>
                  <Text style={styles.rememberText}>
                    Did'nt receive OTP?
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: '#F5BE00',
                      }}>
                      Resend Code
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#043142',
              paddingVertical: 8,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginTop: responsiveScreenHeight(5),
            }}
            onPress={() => setShowOtp(true)}>
            <Text style={styles.loginText}>Request OTP</Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.rememberText,
              {
                textAlign: 'center',
                color: '#043142',
                marginTop: responsiveScreenHeight(2),
              },
            ]}>
            Or continue with
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                borderColor: '#043142',
                paddingHorizontal: responsiveScreenWidth(9),
                paddingVertical: responsiveScreenHeight(1.5),
                borderRadius: 15,
              }}>
              <Image source={require('../../assets/Images/google.png')} />
              <Text
                style={{
                  color: '#333333',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                borderColor: '#043142',
                paddingHorizontal: responsiveScreenWidth(9),
                paddingVertical: responsiveScreenHeight(1.5),
                borderRadius: 15,
              }}>
              <Image source={require('../../assets/Images/apple.png')} />
              <Text
                style={{
                  color: '#333333',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: '#b6b6b6',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View>
                <Text style={{fontSize: 30, fontFamily: 'Poppins-Bold'}}>
                  1 new order
                </Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="cross" size={50} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                marginTop: responsiveScreenHeight(2),
              }}>
              <View>
                <Text style={styles.simpleText}>ID:5541</Text>
                <Text style={styles.simpleText}>Order by Harish Ghai</Text>
              </View>
              <View>
                <Text style={styles.simpleText}>11:30 PM</Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                width: '90%',
                marginTop: responsiveScreenHeight(3),
              }}></View>
            <View
              style={{
                height: responsiveScreenHeight(10),
                width: '90%',
                backgroundColor: '#bfbfbf',
                marginTop: responsiveScreenHeight(3),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                marginBottom: responsiveScreenHeight(2),
              }}>
              <Text style={styles.simpleText}>Customer Box</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <Text style={styles.simpleText}>1X Cold Coffee</Text>
              <Text style={styles.simpleText}>60</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <Text style={styles.simpleText}>1X Ice Tea</Text>
              <Text style={styles.simpleText}>60</Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: 'black',
                width: '90%',
                marginTop: responsiveScreenHeight(3),
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80%',
                marginTop: responsiveScreenHeight(2),
              }}>
              <Text style={styles.simpleText}>Total Bill</Text>
              <Text style={styles.simpleText}>120</Text>
            </View>
            <View style={{width: '90%', marginTop: responsiveScreenHeight(2)}}>
              <Text style={styles.simpleText}>Set food Prep Time</Text>
            </View>
            <View
              style={{
                backgroundColor: '#bfbfbf',
                height: responsiveScreenHeight(6),
                flexDirection: 'row',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(5),

                borderRadius: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setMinutes(minutes - 1)}>
                  <Text style={[styles.simpleText, {marginRight: 20}]}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'black',
                    width: 1,
                    height: responsiveScreenHeight(6),
                  }}></View>
              </View>
              <View>
                <Text style={styles.simpleText}>{minutes} min</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: 'black',
                    width: 1,
                    height: responsiveScreenHeight(6),
                  }}></View>
                <TouchableOpacity onPress={() => setMinutes(minutes + 1)}>
                  <Text style={[styles.simpleText, {marginLeft: 20}]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                marginTop: responsiveScreenHeight(3),
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#bfbfbf',
                  paddingHorizontal: 40,
                  paddingVertical: 20,
                  borderRadius: 20,
                }}>
                <Text style={styles.simpleText}>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#bfbfbf',
                  paddingHorizontal: 40,
                  paddingVertical: 20,
                  borderRadius: 20,
                }}>
                <Text style={styles.simpleText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // Semi-transparent background
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    width: '95%',
    height: '96%',
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: '#f194ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  simpleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#043142',
  },
  subHeading: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#999999',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    // margin: 10,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#F5BE00', // Outline color for both buttons
  },
  selectedButton: {
    backgroundColor: '#F5BE00', // Background color when selected
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  defaultText: {
    color: '#F5BE00', // Text color when not selected
  },
  selectedText: {
    color: 'white', // Text color when selected
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 2,
    borderRadius: 10, // Rounded corners
    borderWidth: 0.5,
    borderColor: '#ccc', // Border color
    // iOS shadow
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 2,
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(2),
  },
  inputContainerPassword: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 2,
    borderRadius: 10, // Rounded corners
    borderWidth: 0.5,
    borderColor: '#ccc', // Border color
    // iOS shadow
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 2,
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#999999',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
});
