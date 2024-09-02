import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
} from 'react-native';

const CustomModal = ({
  visible,
  title,
  body,
  onConfirm,
  onCancel,
  onRequestClose,
}) => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onRequestClose}>
      <Animated.View style={[styles.overlay, {opacity: fadeAnim}]}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.bodyContainer}>{body}</View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#87CEFA', // Light blue
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#FF6347', // Tomato
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CustomModal;
