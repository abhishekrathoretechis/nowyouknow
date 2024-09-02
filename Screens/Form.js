import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CustomModal from '../components/CustomModal';

const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const confirmAction = () => {
    // Handle confirm action
    closeModal();
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form Submitted', {name, email, password});
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="grey"
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="grey"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="grey"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <CustomModal
        visible={modalVisible}
        title="Confirm Action"
        body={<Text>Are you sure you want to proceed?</Text>}
        onConfirm={confirmAction}
        onCancel={closeModal}
        onRequestClose={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f0f8ff', // Light blue background
  },
  input: {
    borderWidth: 1,
    borderColor: 'black', // Light blue border
    padding: 10,
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: '#ffffff', // White background for input
    color: '#333', // Dark text color
  },
  errorText: {
    color: '#FF6347', // Tomato color for error text
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#87CEFA', // Light blue background for button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Form;
