import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from 'react-native/Libraries/NewAppScreen';
import HeaderSearch from '../../components/HeaderSearch';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const AddScreen = () => {
  const [quiz, setQuiz] = useState('upcoming');
  return (
    <View style={styles.mainContainer}>
      <HeaderSearch headingText={'Upcomming Quizzes'} />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: responsiveScreenHeight(2),
        }}>
        <View style={{width: '30%', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setQuiz('upcoming')}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: quiz === 'upcoming' ? '#F5BE00' : '#A6A3A3',
              }}>
              UPCOMING
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: quiz === 'upcoming' ? '#F5BE00' : 'white',
              width: '100%',
              height: responsiveScreenHeight(1),
              borderRadius: 10,
            }}></View>
        </View>
        <View style={{width: '30%', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setQuiz('active')}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: quiz === 'active' ? '#F5BE00' : '#A6A3A3',
              }}>
              ACTIVE
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: quiz === 'active' ? '#F5BE00' : 'white',
              width: '100%',
              height: responsiveScreenHeight(1),
              borderRadius: 10,
            }}></View>
        </View>
        <View style={{width: '30%', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setQuiz('completed')}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: quiz === 'completed' ? '#F5BE00' : '#A6A3A3',
              }}>
              COMPLETED
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: quiz === 'completed' ? '#F5BE00' : 'white',
              width: '100%',
              height: responsiveScreenHeight(1),
              borderRadius: 10,
            }}></View>
        </View>
      </View>
      {quiz === 'upcoming' ? (
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
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
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(4),
                paddingVertical: responsiveScreenHeight(2),
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <View>
                  <Image source={require('../../assets/Images/devices.png')} />
                </View>
                <View>
                  <Text style={styles.headerText}>Quiz Name</Text>
                  <Text style={styles.subHeaderText}>Category</Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.subHeaderText}>Time</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: responsiveScreenWidth(4),
                gap: 10,
                paddingBottom: responsiveScreenHeight(2),
              }}>
              <Image source={require('../../assets/Images/gift.png')} />
              <Text style={styles.subHeaderText}>
                Surprise for top 3 Winners
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
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
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(4),
                paddingVertical: responsiveScreenHeight(2),
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <View>
                  <Image source={require('../../assets/Images/devices.png')} />
                </View>
                <View>
                  <Text style={styles.headerText}>Quiz Name</Text>
                  <Text style={styles.subHeaderText}>Category</Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.subHeaderText}>Time</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: responsiveScreenWidth(4),
                gap: 10,
                paddingBottom: responsiveScreenHeight(2),
              }}>
              <Image source={require('../../assets/Images/gift.png')} />
              <Text style={styles.subHeaderText}>
                Surprise for top 3 Winners
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
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
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(4),
                paddingVertical: responsiveScreenHeight(2),
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <View>
                  <Image source={require('../../assets/Images/devices.png')} />
                </View>
                <View>
                  <Text style={styles.headerText}>Quiz Name</Text>
                  <Text style={styles.subHeaderText}>Category</Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.subHeaderText}>Time</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: responsiveScreenWidth(4),
                gap: 10,
                paddingBottom: responsiveScreenHeight(2),
              }}>
              <Image source={require('../../assets/Images/gift.png')} />
              <Text style={styles.subHeaderText}>
                Surprise for top 3 Winners
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
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
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(4),
                paddingVertical: responsiveScreenHeight(2),
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <View>
                  <Image source={require('../../assets/Images/devices.png')} />
                </View>
                <View>
                  <Text style={styles.headerText}>Quiz Name</Text>
                  <Text style={styles.subHeaderText}>Category</Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.subHeaderText}>Time</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: responsiveScreenWidth(4),
                gap: 10,
                paddingBottom: responsiveScreenHeight(2),
              }}>
              <Image source={require('../../assets/Images/gift.png')} />
              <Text style={styles.subHeaderText}>
                Surprise for top 3 Winners
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(2),
              marginBottom: responsiveScreenHeight(2),
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
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(4),
                paddingVertical: responsiveScreenHeight(2),
              }}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <View>
                  <Image source={require('../../assets/Images/devices.png')} />
                </View>
                <View>
                  <Text style={styles.headerText}>Quiz Name</Text>
                  <Text style={styles.subHeaderText}>Category</Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.subHeaderText}>Time</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: responsiveScreenWidth(4),
                gap: 10,
                paddingBottom: responsiveScreenHeight(2),
              }}>
              <Image source={require('../../assets/Images/gift.png')} />
              <Text style={styles.subHeaderText}>
                Surprise for top 3 Winners
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : quiz === 'active' ? (
        <View>
          <View
            style={{marginTop: responsiveScreenHeight(4), alignSelf: 'center'}}>
            <Image source={require('../../assets/Images/QuizPic.png')} />
          </View>
          <View
            style={{
              paddingHorizontal: responsiveScreenWidth(3),
              marginTop: responsiveScreenHeight(2),
            }}>
            <Text
              style={{
                color: '#043142',
                fontSize: 22,
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
              }}>
              No Upcomming Quizes
            </Text>
            <Text
              style={{
                color: '#999999',
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
                textAlign: 'center',
              }}>
              You're all set for now! No quizzes are scheduled. Keep exploring
              and stay sharp!
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#043142',
              paddingVertical: 15,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              marginTop: responsiveScreenHeight(5),
            }}>
            <Text style={styles.loginText}>Explore Content</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#043142',
  },
  subHeaderText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#777777',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
});
