import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();


const MainNavigator = () => {
  return (
   <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={HomeStack} 
        options={{drawerIcon: config =>
          <FontAwesome 
            name="home" 
            size={24} 
            color="black"
            component={HomeStack}>
            </FontAwesome> }} />
        <Drawer.Screen name = "About" component={AboutStack}
        options={{drawerIcon: config => 
          <FontAwesome 
            name="book" 
            size={24} 
            color="black" 
           component={AboutStack} >
         </FontAwesome> }}/>
      </Drawer.Navigator>
    </NavigationContainer>  
  );
};

export default MainNavigator;