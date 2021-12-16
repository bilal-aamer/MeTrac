import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import LogoScreen from './screens/LogoScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="start" component={LogoScreen} />
      <Stack.Screen name="Bottomtabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootStack;
