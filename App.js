import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen.js';
import RoomScreen from './components/RoomScreen.js';
import MenuScreen from './components/MenuScreen.js';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'HomeScreen'}}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{title: 'MenuScreen'}}
          />
          <Stack.Screen
            name="Room"
            component={RoomScreen}
            options={{title: 'RoomScreen'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
