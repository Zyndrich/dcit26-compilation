import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

const Profile = ({ route }) => {
  const data = route.params;
  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.picture}
        source={{ uri: data.picture.large }}
      />
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.name}>
          {data.name.first} {data.name.last}
        </Text>

        <Text style={globalStyles.text}>
          Information about {data.name.title}. {data.name.first} {data.name.last}
        </Text>
        <Text style={globalStyles.info}>
          Gender: {data.gender}{'\n'}
          Age: {data.dob.age}{'\n'}
          Birthday: {data.dob.date}{'\n'}
          Address: {data.location.street.number}, {data.location.street.name}, {data.location.city}, {data.location.state}, {data.location.country}
          {'\n'}{'\n'}
          Email: {data.email}{'\n'}
          Phone Number: {data.phone}{'\n'}
          Cell Number: {data.cell}
        </Text>

      </ScrollView>
    </View>
  );
};
export default Profile;
