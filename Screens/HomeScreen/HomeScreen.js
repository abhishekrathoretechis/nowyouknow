import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Headers from '../../components/Headers';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

// Dimensions for width
const {width} = Dimensions.get('window');

// Update image array to use `require` for local images
const images = [
  require('../../assets/Images/images1.png'),
  require('../../assets/Images/images2.png'),
  require('../../assets/Images/images3.png'),
  require('../../assets/Images/images4.png'),
  require('../../assets/Images/images5.png'),
  require('../../assets/Images/images6.png'),
];

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Headers homeScreen />
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 18,
          color: 'black',
          marginLeft: responsiveScreenWidth(6),
        }}>
        Announcements
      </Text>
      <View>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.slide}>
              {/* Directly use the item without the uri prop */}
              <Image source={item} style={styles.image} />
            </View>
          )}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 18,
          color: 'black',
          marginLeft: responsiveScreenWidth(6),
          marginTop: responsiveScreenHeight(2),
        }}>
        Post
      </Text>
      <ScrollView>
        <View style={{marginTop: responsiveScreenHeight(2)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <Image
                source={require('../../assets/Images/profilePicture.png')}
              />
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Alex
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/Images/threeDotsNew.png')} />
            </View>
          </View>
          <View
            style={{alignSelf: 'center', marginTop: responsiveScreenHeight(2)}}>
            <Image source={require('../../assets/Images/postImage.png')} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(1.5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                paddingHorizontal: responsiveScreenWidth(2),
              }}>
              <Image source={require('../../assets/Images/like.png')} />
              <Image source={require('../../assets/Images/comment.png')} />
              <Image source={require('../../assets/Images/share.png')} />
            </View>
            <View>
              <Image source={require('../../assets/Images/saveNew.png')} />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: responsiveScreenWidth(8),
              marginTop: responsiveScreenHeight(1),
              fontFamily: 'Poppins-Medium',
              color: 'black',
              fontSize: 13,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et ...more
          </Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(2)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <Image
                source={require('../../assets/Images/profilePicture.png')}
              />
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Alex
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/Images/threeDotsNew.png')} />
            </View>
          </View>
          <View
            style={{alignSelf: 'center', marginTop: responsiveScreenHeight(2)}}>
            <Image source={require('../../assets/Images/postImage.png')} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(1.5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                paddingHorizontal: responsiveScreenWidth(2),
              }}>
              <Image source={require('../../assets/Images/like.png')} />
              <Image source={require('../../assets/Images/comment.png')} />
              <Image source={require('../../assets/Images/share.png')} />
            </View>
            <View>
              <Image source={require('../../assets/Images/saveNew.png')} />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: responsiveScreenWidth(8),
              marginTop: responsiveScreenHeight(1),
              fontFamily: 'Poppins-Medium',
              color: 'black',
              fontSize: 13,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et ...more
          </Text>
        </View>
        <View
          style={{
            marginTop: responsiveScreenHeight(2),
            marginBottom: responsiveScreenHeight(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <Image
                source={require('../../assets/Images/profilePicture.png')}
              />
              <Text
                style={{
                  color: '#043142',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                }}>
                Alex
              </Text>
            </View>
            <View>
              <Image source={require('../../assets/Images/threeDotsNew.png')} />
            </View>
          </View>
          <View
            style={{alignSelf: 'center', marginTop: responsiveScreenHeight(2)}}>
            <Image source={require('../../assets/Images/postImage.png')} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '85%',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: responsiveScreenHeight(1.5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                paddingHorizontal: responsiveScreenWidth(2),
              }}>
              <Image source={require('../../assets/Images/like.png')} />
              <Image source={require('../../assets/Images/comment.png')} />
              <Image source={require('../../assets/Images/share.png')} />
            </View>
            <View>
              <Image source={require('../../assets/Images/saveNew.png')} />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: responsiveScreenWidth(8),
              marginTop: responsiveScreenHeight(1),
              fontFamily: 'Poppins-Medium',
              color: 'black',
              fontSize: 13,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et ...more
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  slide: {
    marginTop: responsiveScreenHeight(1),

    height: responsiveScreenHeight(8),
  },
  image: {
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(8), // Adjust height as needed
    resizeMode: 'cover',
    marginRight: responsiveScreenWidth(1),
    marginLeft: responsiveScreenWidth(2),
  },
});
