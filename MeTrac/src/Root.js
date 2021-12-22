import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Root;
