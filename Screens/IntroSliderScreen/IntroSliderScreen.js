import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import LoginScreen from '../LoginScreen/LoginScreen';

const slides = [
  {
    key: 1,
    title: 'Welcome to ScaleUp!',
    text: 'Your journey to focused, distraction-free learning starts here. Discover a platform designed to enhance your knowledge and keep you engaged.',
    image: require('../../assets/Images/ImageOne.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Personalized learning Paths',
    text: 'Set your goals and interests to receive tailored course recommendations. We curate content just to help you stay motivated and achieve your objectives.',
    image: require('../../assets/Images/ImageTwo.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Interactive and Engaging Features',
    text: 'Dive into a variety of interactive modules, quizzes, and community discussions. We make learning fun and interactive, ensuring you stay on track.',
    image: require('../../assets/Images/ImageThree.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Track your Progress',
    text: 'Use our analytics tools to monitor your learning journey, get detailed feedback, insights, celebrate your achievements and identify areas for improvement.',
    image: require('../../assets/Images/ImageFour.png'),
    backgroundColor: '#22bcb5',
  },
];

const IntroSliderScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref for slider
  const sliderRef = useRef(null);

  const _renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={['#FFFFE0', '#FFD700']} // Light yellow to darker yellow
        style={styles.linearGradient}>
        <View style={styles.slide}>
          <Image source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <TouchableOpacity
            style={{marginTop: responsiveScreenHeight(8)}}
            onPress={() => {
              // Move to the next slide or finish the intro if it's the last slide
              if (currentIndex < slides.length - 1) {
                sliderRef.current.goToSlide(currentIndex + 1, true);
              } else {
                _onDone();
              }
            }}>
            <Icon name="rightcircle" size={40} style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp) {
    return <LoginScreen />;
  } else {
    return (
      <AppIntroSlider
        ref={sliderRef} // Assign ref to AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderPagination={() => null}
        activeDotIndex={currentIndex}
        onSlideChange={index => setCurrentIndex(index)}
        showNextButton={false}
        showDoneButton={false} // Disable built-in Done button as you have your own button
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-ExtraBold',
    color: '#000',
    marginTop: responsiveScreenHeight(2),
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginHorizontal: responsiveScreenWidth(1),
    lineHeight: responsiveScreenHeight(3.5),
  },
  linearGradient: {
    flex: 1,
  },
});

export default IntroSliderScreen;
