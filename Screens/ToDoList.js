import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const ToDoList = ({navigation}) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log('Failed to load tasks:', error);
    }
  };

  const saveTasks = async newTasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.log('Failed to save tasks:', error);
    }
  };

  const addTask = () => {
    if (task.length === 0) return;

    const newTask = {id: Date.now().toString(), text: task, completed: false};
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    setTask('');
    saveTasks(updatedTasks);
  };

  const toggleTask = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleEdit = task => {
    setEditingTask(task);
    setEditedText(task.text);
    setModalVisible(true);
  };

  const saveEditedTask = () => {
    if (editedText.length === 0) return;

    const updatedTasks = tasks.map(task =>
      task.id === editingTask.id ? {...task, text: editedText} : task,
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setModalVisible(false);
    setEditingTask(null);
    setEditedText('');
  };

  const deleteTask = id => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
            saveTasks(updatedTasks);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const renderItem = ({item}) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTask(item.id)}>
        {item.completed && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.text}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>To Do List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      {/* Edit Task Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false);
          setEditingTask(null);
          setEditedText('');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              style={styles.modalInput}
              value={editedText}
              onChangeText={setEditedText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={saveEditedTask}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  setEditingTask(null);
                  setEditedText('');
                }}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', // Light blue background
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#87CEFA', // Light blue border
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#ffffff', // White background for input
  },
  addButton: {
    backgroundColor: '#87CEFA', // Light blue background for button
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff', // White text color
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#87CEFA',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#FFA07A', // Light salmon color for edit button
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF6347', // Tomato color for delete button
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderColor: '#87CEFA',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#87CEFA',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#FF6347',
  },
  modalButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  main: {
    width: '70%',
    height: 40,
    marginBottom: 40,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',
    gap: 80,
  },
  headerText: {
    // textAlign: 'center',
    color: 'red',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default ToDoList;
