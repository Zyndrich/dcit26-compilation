//BSCS 3-3
//ALAG, Hannah June C.
//NOBLEZA, Zyndrich A.
//QUIJANO, Marilin A.
//VIRAY, Laarny Ross

import React, {useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  TextInput,
  FlatList
  } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [outputItem, settingItem] = useState([]);
  const itemInput = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addingItems = () =>{
    settingItem( currentItem => [...currentItem, 
    {key: Math.random().toString(), value: enteredItem}]);
    setEnteredItem('');
  };
  return(
    <View style = {styles.viewstyle}>
      <View style = {styles.inputItem}>
        <TextInput placeholder= "Enter Item" 
          style = {styles.inputText} 
          onChangeText={itemInput}
          value={enteredItem}/>

        <Button title = "Add" 
        onPress={addingItems}/>
      </View>
        <FlatList data={outputItem}
      renderItem = {itemData =>(
          <View style={styles.styleList}>
            <Text>{itemData.item.value}</Text>
         </View>
    )}/>
    </View>

  );
}
const styles = StyleSheet.create({
  viewstyle: {
    padding: 30,
    backgroundColor: '#00BFFF',

  },
  inputItem: {
    flexDirection: "row", 
    justifyContent:'space-between', 
    alignItems:'Center',
    borderColor: '#000000',
  },
  inputText:
    {borderColor: '#000000',
     borderWidth:1, 
     padding:5 , 
     width: '80%' 
  },
  styleList:
  { padding: 10,
    margin: 8,
    backgroundColor: '#FFC0CB',
    borderColor: 'black',
    borderWidth:1,
  },
  
});
