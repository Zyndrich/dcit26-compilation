import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  
} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style= {styles.container}>
        <Text style= {styles.text}> Konohagakure{'\n\n'}
"Village Hidden in the Leaves" or "Hidden Leaf Village",  is the hidden village of the Land of Fire. As the village of one of the Five Great Shinobi Countries, Konohagakure has a Kage as its leader known as the Hokage, of which there have been seven in its history. Konoha resides deep within a forest at the base of a mountain known as the Hokage Rock, which has the faces of all those who have taken the office of Hokage engraved on it.

It is surrounded on all sides by enormous walls.While generally seen as the most powerful of the ninja villages,Konoha has enjoyed many years of relative peace and stability. </Text>
        <Button title = "GO BACK" onPress = {() => navigation.goBack()} color="#696969"/>
    </View>
  );
}

export default About;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000'
    },
    image: {
      width: 350,
      height: 225,
    },
    text: {
      color: '#FFFFFF',
      marginTop: 20,
      textAlign: 'center',
      fontSize: 15,
      fontWeight:'bold',
      fontStyle: ' italic',
    }
  }
);