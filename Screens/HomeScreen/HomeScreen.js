import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Headers from '../../components/Headers';
import {PostsContext} from '../../PostsContext';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: screenWidth} = Dimensions.get('window');

// Update image array to use `require` for local images
const images = [
  require('../../assets/Images/images1.png'),
  require('../../assets/Images/images2.png'),
  require('../../assets/Images/images3.png'),
  require('../../assets/Images/images4.png'),
  require('../../assets/Images/images5.png'),
  require('../../assets/Images/images6.png'),
];

const HomeScreen = ({navigation, route}) => {
  const [activeSlide, setActiveSlide] = useState({});
  const [likedPosts, setLikedPosts] = useState({}); // Track liked state for each post
  const {posts, user} = useContext(PostsContext);

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

  const renderPagination = (postId, postImages) => {
    return (
      <Pagination
        dotsLength={postImages.length}
        activeDotIndex={activeSlide[postId] || 0}
        containerStyle={{paddingVertical: 8}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const toggleLike = postId => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format as per your needs
  };
  const convertDateFormat = dateString => {
    // Split the date string into an array [MM, DD, YYYY]
    const [month, day, year] = dateString?.split('/');

    // Return the new format as DD/MM/YYYY
    return `${day?.padStart(2, '0')}/${month?.padStart(2, '0')}/${year}`;
  };

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
        {posts?.reverse()?.map(post => (
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
                <Image
                  source={post?.isNew ? user?.profilePic : post?.profilePic}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={{
                    color: '#043142',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 20,
                  }}>
                  {post?.isNew ? user?.userName : post?.userName}
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
                onSnapToItem={index => {
                  setActiveSlide(prev => ({...prev, [post.id]: index}));
                }}
                loop={false}
              />
              {/* Render Pagination */}
              {renderPagination(post.id, post.postImages)}
            </View>
            <Text
              style={{
                // marginTop: responsiveScreenHeight(1),
                color: '#043142',
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                paddingHorizontal: responsiveScreenWidth(5),

                alignSelf: 'flex-end',
              }}>
              {post?.isNew ? 'Posted Today' : post?.date}
              {/* Display formatted date */}
            </Text>

            {/* Like and Save Buttons */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginTop: responsiveScreenHeight(1),
                justifyContent: 'space-between',
                paddingHorizontal: responsiveScreenWidth(5.5),
              }}>
              <View
                style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => toggleLike(post.id)}>
                  {likedPosts[post.id] ? (
                    <Icon name="heart" size={30} style={{color: 'red'}} />
                  ) : (
                    <Icon name="hearto" size={30} style={{color: '#043142'}} />
                  )}
                </TouchableOpacity>
                <Image source={require('../../assets/Images/comment.png')} />
                <Image source={require('../../assets/Images/share.png')} />
              </View>
              <Image source={require('../../assets/Images/saveNew.png')} />
            </View>
            <Text
              style={{
                width: '87%',
                alignSelf: 'center',
                marginTop: responsiveScreenHeight(1.5),
                color: '#000',
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
              }}>
              {post.title}
            </Text>

            {/* Post Description */}
            <Text
              style={{
                width: '87%',
                alignSelf: 'center',
                marginTop: responsiveScreenHeight(0.1),
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
