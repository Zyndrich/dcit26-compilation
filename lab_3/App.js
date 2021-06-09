//BSCS 3-3
//ALAG, HANNAH JUNE C.
//NOBLEZA, ZYNDRICH A.
//QUIJANO, MARILIN A.

import React, {useState} from 'react';
import { Text, View, Button, StyleSheet,Image} from 'react-native';
import Samplemodal from './components/SampleModal';

export default function App(){

  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <View style={styles.container}>
      <Button title = "CLICK ME" onPress = {() => setIsModalOpen(true)} />
      <View>
      <Text style = {styles.title}>Tom and Jerry</Text>
      </View>
      <Samplemodal displayModal = {isModalOpen} closeModal = {() => setIsModalOpen(false)} />
    </View> 
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center'
   },
   title: {
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    fontSize: 45,
    fontWeight: 'bold',
    
   }
});