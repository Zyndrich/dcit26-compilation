import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#ADEFD1" />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
          <Image
            style={globalStyles.picture}
            source={{ uri: data.picture.large }}
          />
        </TouchableOpacity>
      )}
      {isLoading ? (
        true
      ) : (
        <Text style={globalStyles.name}>
          {data.name.first} {data.name.last}
        </Text>
      )}
      {isLoading ? (
        true
      ) : (
      <Button title="RANDOM USER" onPress={() => fetchRandomData()} />
      )}
    </View>
  );
};
export default Home;