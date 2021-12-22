import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {makeStyles, withTheme, Button} from 'react-native-elements';
import City from '../../assets/city.svg';
import LinearGradient from 'react-native-linear-gradient';

export const LogoScreen = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  const windowWIdth = Dimensions.get('window').width;
  return (
    <LinearGradient colors={['#0073e6', '#ffffff']} style={styles.main}>
      <View style={styles.body}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <Button
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('overlay')}
          title="Get Started"
        />
        <City width={windowWIdth} height={200} />
      </View>
    </LinearGradient>
  );
};

const useStyles = makeStyles(() => {
  return {
    main: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    body: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    image: {
      width: 300,
      height: 200,
      alignContent: 'center',
    },
    button: {
      marginVertical: 100,
      borderRadius: 100,
    },
    buttonText: {
      paddingHorizontal: 80,
      paddingVertical: 5,
      color: 'black',
      fontSize: 18,
    },
    buttonStyle: {
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: '#FFBC34',
    },
  };
});

export default withTheme(LogoScreen, '');
