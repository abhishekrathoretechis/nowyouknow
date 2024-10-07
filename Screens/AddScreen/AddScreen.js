import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {PostsContext} from '../../PostsContext'; // Import the context
import Headers from '../../components/Headers';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const AddScreen = ({navigation}) => {
  const [title, setTitle] = useState(''); // Add state for title
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // Store multiple images
  const [activeSlide, setActiveSlide] = useState(0); // For pagination
  const {addPost, user} = useContext(PostsContext); // Access the addPost function from context

  const handleChoosePhoto = async () => {
    const options = {
      mediaType: 'photo',
      noData: true,
      selectionLimit: 0, // 0 allows multiple selection
    };

    try {
      const result = await launchImageLibrary(options);

      if (result?.assets && result.assets.length > 0) {
        setImages(result.assets); // Store selected images in an array
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const handleSubmit = () => {
    if (title && description && images.length > 0) {
      const newPost = {
        id: Date.now(),
        userName: user?.userName,
        profilePic: user?.profilePic,
        postImages: images, // Store multiple images
        title,
        description,
        isNew: true, // Mark this post as new
      };

      addPost(newPost); // Add the post using the context
      navigation.navigate('HomeScreen'); // Navigate back to HomeScreen
    } else {
      Alert.alert('Please fill in all fields and choose an image.');
    }
  };

  const renderImage = ({item}) => (
    <Image source={{uri: item.uri}} style={styles.carouselImage} />
  );

  return (
    <View style={styles.container}>
      <Headers quiz quizText={'Add Post'} />
      {images.length > 0 && (
        <View>
          <Carousel
            data={images}
            renderItem={renderImage}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={images.length}
            activeDotIndex={activeSlide}
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
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Choose Photos</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      {/* Show Carousel if images are selected */}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselImage: {
    width: screenWidth * 0.8,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default AddScreen;
