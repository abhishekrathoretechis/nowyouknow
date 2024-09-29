import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/Headers';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const ProfileScreen = () => {
  const [Leaderboard, setLeaderBoard] = useState('today');
  return (
    <View style={styles.mainContainer}>
      <Headers quiz quizText={'Leaderboard'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: responsiveScreenWidth(5),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: Leaderboard === 'today' ? '#043142' : 'white',

            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => setLeaderBoard('today')}>
          <Text
            style={{
              color: Leaderboard === 'today' ? 'white' : '#043142',
              fontFamily: 'Poppins-Bold',
            }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Leaderboard === 'week' ? '#043142' : 'white',

            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => setLeaderBoard('week')}>
          <Text
            style={{
              color: Leaderboard === 'week' ? 'white' : '#043142',
              fontFamily: 'Poppins-Bold',
            }}>
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Leaderboard === 'all' ? '#043142' : 'white',

            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => setLeaderBoard('all')}>
          <Text
            style={{
              color: Leaderboard === 'all' ? 'white' : '#043142',
              fontFamily: 'Poppins-Bold',
            }}>
            All Time
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
            marginTop: responsiveScreenHeight(4),
          }}>
          <View style={{gap: 10, alignItems: 'center'}}>
            <Image source={require('../../assets/Images/p7.png')} />
            <Image source={require('../../assets/Images/r1.png')} />
          </View>
          <View style={{gap: 10, alignItems: 'center'}}>
            <Image source={require('../../assets/Images/p2.png')} />
            <Image source={require('../../assets/Images/r2.png')} />
          </View>
          <View style={{gap: 10, alignItems: 'center'}}>
            <Image source={require('../../assets/Images/p6.png')} />
            <Image source={require('../../assets/Images/r3.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveScreenWidth(8),
            marginTop: responsiveScreenHeight(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <Text
              style={{
                color: '#F5BE00',
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
              }}>
              4
            </Text>
            <Image source={require('../../assets/Images/p8.png')} />
            <View>
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Name
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                }}>
                Designation
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#043142',
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
              }}>
              Points
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9E9E9',
            width: '100%',
            height: responsiveScreenHeight(0.2),
            marginTop: responsiveScreenHeight(1),
          }}></View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
