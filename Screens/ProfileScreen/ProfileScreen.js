import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PostsContext} from '../../PostsContext'; // Import the context
import Headers from '../../components/Headers';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const {width: screenWidth} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  const {posts, user} = useContext(PostsContext);

  // Filter only posts that have the isNew property set to true
  const newPosts = posts.filter(post => post.isNew);

  return (
    <View style={styles.container}>
      <Headers quiz quizText={'Profile Screen'} />
      <View style={styles.profileInfoContainer}>
        <Image source={user?.profilePic} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{user?.userName}</Text>

          <Text style={styles.bio}>{user?.bio}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '40%',
          backgroundColor: '#043142',
          paddingVertical: 8,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginTop: responsiveScreenHeight(1),
        }}
        onPress={() => navigation.navigate('EditProfileScreen')}>
        <Text style={styles.loginText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{newPosts.length}</Text>
          <Text style={styles.statLabel}>New Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1.2K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>345</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View
        style={{
          height: responsiveScreenHeight(0.12),
          width: '100%',
          backgroundColor: 'grey',
        }}></View>

      {/* New Posts Grid using mapping */}
      <View
        style={[
          styles.postsGrid,
          newPosts?.length !== 1 ? {justifyContent: 'space-between'} : {},
        ]}>
        {newPosts.map(item => (
          <View key={item.id} style={styles.postContainer}>
            <Image
              source={{uri: item.postImages[0].uri}} // Display the first image of the post
              style={styles.postImage}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(6),
    marginTop: responsiveScreenHeight(3),
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  userInfo: {
    marginLeft: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#043142',
    fontFamily: 'Poppins-Bold',
  },
  bio: {
    fontSize: 16,
    color: '#043142',
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: responsiveScreenHeight(2),
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#043142',
    fontFamily: 'Poppins-Medium',
  },
  statLabel: {
    fontSize: 14,
    color: '#043142',
    fontFamily: 'Poppins-Regular',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: responsiveScreenWidth(5),
    // justifyContent: 'space-evenly',
  },
  postContainer: {
    width: screenWidth / 2.5, // Adjust width to fit grid
    margin: responsiveScreenWidth(1),
  },
  postImage: {
    width: '100%', // Full width of post container
    height: screenWidth / 2.2, // Square ratio
    borderRadius: 10,
    resizeMode: 'cover',
  },
  loginText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});

export default ProfileScreen;
