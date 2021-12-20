import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from '../screens/User';
import General from '../screens/General';
import Privacy from '../screens/Privacy';
import TC from '../screens/TC';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="settings" component={User} />
      <Stack.Screen name="general" component={General} />
      <Stack.Screen name="privacy" component={Privacy} />
      <Stack.Screen name="tc" component={TC} />
      <Stack.Screen name="aboutus" component={About} />
    </Stack.Navigator>
  );
};

export default UserStack;
