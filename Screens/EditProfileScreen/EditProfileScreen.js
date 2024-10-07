import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {PostsContext} from '../../PostsContext'; // Import the context to update user profile info
import Headers from '../../components/Headers';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const EditProfileScreen = ({navigation}) => {
  const {user, updateUser} = useContext(PostsContext); // Assume user info is stored in context
  const [name, setName] = useState(user?.userName || 'Alex'); // Use userName instead of name
  const [bio, setBio] = useState(
    user?.bio || 'Photographer | Student | Wonderer',
  );
  const [profileImage, setProfileImage] = useState(user?.profilePic); // Use profilePic instead

  const handleChoosePhoto = async () => {
    const options = {
      mediaType: 'photo',
      noData: true,
    };

    try {
      const result = await launchImageLibrary(options);

      if (result?.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setProfileImage({uri: selectedImage.uri}); // Make sure it’s a URI for the image
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const handleSaveProfile = () => {
    if (name && bio && profileImage) {
      // Update the user info in the context
      const updatedUser = {
        userName: name, // Match with the context key
        bio,
        profilePic: profileImage, // Match with the context key
      };

      updateUser(updatedUser);
      Alert.alert('Profile updated successfully!');
      navigation.navigate('ProfileScreen');
    } else {
      Alert.alert('Please fill in all fields and choose a profile image.');
    }
  };

  return (
    <View style={styles.container}>
      <Headers quiz quizText={'Edit Profile'} />

      <TouchableOpacity
        onPress={handleChoosePhoto}
        style={styles.imageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.changePhotoText}>Change Profile Photo</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: responsiveScreenHeight(3),
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  changePhotoText: {
    marginTop: 10,
    color: '#007AFF',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#F5BE00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
