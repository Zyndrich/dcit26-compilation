import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  
} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style= {styles.container}>
        <Image style={styles.image} source={require('../screens/naruto.jpg')} />
        <Text style= {styles.text}> Naruto (2002) Poster
Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja. </Text>
        <Button title = "About" onPress = {() => navigation.navigate('About')}color="#696969"/>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000'
    },
    
    image: {
    width: 250,
    height: 500,
    },

    text: {
      color: '#FFFFFF',
      marginTop: 10,
      textAlign: 'justify',
      fontSize: 15,
      fontWeight:'bold',
      fontStyle:'italic'
  }
  }
);