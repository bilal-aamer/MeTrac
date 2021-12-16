import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const LogoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Logo comes here </Text>
      <Button
        onPress={() => navigation.navigate('Bottomtabs')}
        title="Get Started -> "
      />
    </View>
  );
};

export default LogoScreen;
