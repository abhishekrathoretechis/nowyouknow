import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {PostsContext} from '../../PostsContext'; // Import the context
import Headers from '../../components/Headers';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const {posts} = useContext(PostsContext);

  const renderPostImage = ({item}) => (
    <Image
      source={item}
      style={{
        width: screenWidth * 0.9,
        height: responsiveScreenHeight(30),
        borderRadius: 10,
      }}
      resizeMode="cover"
    />
  );

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
        Post
      </Text>
      <ScrollView>
        {posts.map(post => (
          <View key={post.id} style={{marginTop: responsiveScreenHeight(2)}}>
            {/* Header: User Info */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '85%',
                justifyContent: 'space-between',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <Image source={post.profilePic} />
                <Text
                  style={{
                    color: '#043142',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 20,
                  }}>
                  {post.userName}
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/Images/threeDotsNew.png')}
                />
              </View>
            </View>

            {/* Carousel for Post Images */}
            <View
              style={{
                alignSelf: 'center',
                marginTop: responsiveScreenHeight(2),
                height: responsiveScreenHeight(30),
              }}>
              <Carousel
                data={post.postImages}
                renderItem={renderPostImage}
                sliderWidth={screenWidth}
                itemWidth={screenWidth * 0.9}
                loop={false}
              />
            </View>

            {/* Post Description */}
            <Text
              style={{
                width: '85%',
                alignSelf: 'center',
                marginTop: responsiveScreenHeight(1.5),
                color: '#626262',
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
              }}>
              {post.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
