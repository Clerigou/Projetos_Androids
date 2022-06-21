import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Config from './TabScreens/ConfigScreen';
import ConfigScreen2 from './Screens/ConfigScreen2';
import ConfigScreen3 from './Screens/ConfigScreen3'
import Home from './TabScreens/Home';
import Perfil from './TabScreens/Perfil';
import Mensagens from './TabScreens/Mensagens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function ConfigStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen
      name= "config"
      component={ Config }
      />
      <Stack.Screen
      name= "Segunda_Tela"
      component={ ConfigScreen2 }
      />
      <Stack.Screen
      name= "terceira_tela"
      component={ ConfigScreen3 }
      />
    </Stack.Navigator>
 )
}

function App () {
  return (
  <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel : false,
        tabBarIcon: ({ focused, size, color}) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = 'home'
            size = focused ? 35 : 25
            color = focused ? 'white' : 'gray'
          } else if (route.name === 'confighome'){
              iconName = 'cog'
              size = focused ? 35 : 25
              color = focused ? 'white' : 'gray'
          } else if (route.name === 'Perfil'){
            iconName = 'user-alt'
            size = focused ? 35 : 25
            color = focused ? 'white' : 'gray'
          } else if (route.name === 'Messages'){
            return (
              <FontAwesome
                name='envelope'
                size={focused ? 35 : 25}
                color={focused ? 'white' : 'gray'}
              />
            )
          }
        return (
          <FontAwesome5
            name= {iconName}
            size = {size}
            color = {color}  
          />
                    
                  )
                }
              }) }
      barStyle = {{ 
        position: 'absolute',
        backgroundColor: 'gray',

      }}
      initialRouteName = {"confighome"}                
    >
      <Tab.Screen 
      options={{tabBarActiveBackgroundColor: 'rgb(134,1,175)'}} 
      name="Home" 
      component={Home} />

      <Tab.Screen 
      options={{tabBarActiveBackgroundColor: 'rgb(134,1,175)'}} 
      name = "confighome" 
      component={ConfigStack}/>

      <Tab.Screen 
      options={{tabBarActiveBackgroundColor: 'rgb(134,1,175)'}}  
      name="Perfil" 
      component={Perfil} />

      <Tab.Screen 
      options={{tabBarActiveBackgroundColor: 'rgb(134,1,175)'}}  
      name="Messages" 
      component={Mensagens} />
    </Tab.Navigator>

  </NavigationContainer>
  
  );
    
}




export default App;