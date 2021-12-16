import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {makeStyles, withTheme, Button} from 'react-native-elements';

export const LogoScreen = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  return (
    <View style={styles.body}>
      <Text> Logo comes here </Text>
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Bottomtabs')}
        title="Get Started -> "
      />
    </View>
  );
};

const useStyles = makeStyles(() => {
  return {
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      margin: 30,
    },
  };
});

export default withTheme(LogoScreen, '');
