import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Metro from '../screens/Metro';
import Track from '../screens/Track';
import Share from '../screens/Share';
import Tracker from '../screens/Tracker';

const Stack = createNativeStackNavigator();

const MetroStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottomtabs" component={Metro} />
      <Stack.Screen name="Track" children={() => <Track uid={props.uid} />} />
      <Stack.Screen name="Share" children={() => <Share uid={props.uid} />} />
      <Stack.Screen
        name="Tracker"
        children={() => <Tracker uid={props.uid} />}
      />
    </Stack.Navigator>
  );
};

export default MetroStack;
