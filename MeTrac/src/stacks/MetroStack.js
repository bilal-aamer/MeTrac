import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Metro from '../screens/Metro';
import Track from '../screens/Track';

const Stack = createNativeStackNavigator();

const MetroStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottomtabs" component={Metro} />
      <Stack.Screen name="Track" component={Track} />
    </Stack.Navigator>
  );
};

export default MetroStack;
