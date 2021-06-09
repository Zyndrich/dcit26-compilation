import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          <View style={styles.items}>
            <ScrollView>
              <View style={styles.imageview}>
                <Image
                  style={styles.image}
                  source={require('../screens/konohagakure.jpg_large')}
                />
              </View>
              <Text style={styles.textstyle}>
                Konohagakure{'\n\n'} "The Village Hidden in the leaves"
              </Text>
              <View style={styles.buttonstyle}>
                <Button
                  title="Profile"
                  onPress={() => navigation.navigate('Profile')}
                  color="#696969"
                />
              </View>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView> 
  );
}

export default Home;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000'
    },
    
    image: {
    width: 300,
    height: 200,
    },

    imageview: {
    flex: 1,
    },

    textstyle: {
    color: "#FFFFFF",
    padding: 5,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    },

    buttonstyle: {
    width: 200,
    alignSelf: 'center',
    padding: 5
    }
  }
); 