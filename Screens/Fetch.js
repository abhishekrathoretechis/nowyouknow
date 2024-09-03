import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Headers from '../components/Headers';
import Icon from 'react-native-vector-icons/Ionicons';

const Fetch = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        setData(json.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#87CEFA" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load data. Please try again later.
        </Text>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Product List</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  itemTextContainer: {
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#87CEFA',
    marginTop: 5,
  },
  main: {
    width: '70%',
    height: 40,
    marginBottom: 40,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',
    gap: 100,
  },
  headerText: {
    // textAlign: 'center',
    color: 'red',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default Fetch;
