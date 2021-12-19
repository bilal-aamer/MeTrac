import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Pin from '../../assets/pin.svg';

const Train = () => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <LinearGradient colors={['#0073e6', '#ffffff']}>
        <View style={styles.bgview} />
      </LinearGradient>
      <ScrollView style={styles.frview}>
        <Pin width={44} height={44} style={styles.pin} />
      </ScrollView>
    </View>
  );
};

const useStyles = makeStyles(() => {
  const windowWIdth = Dimensions.get('window').width;

  return {
    main: {flex: 1, alignItems: 'center', backgroundColor: '#ffffff'},
    bgview: {
      width: 500,
      height: 600,
    },
    frview: {
      width: windowWIdth,
      position: 'absolute',
      flex: 1,
    },
    pin: {
      marginTop: 20,
      marginBottom: 64,
      alignSelf: 'center',
    },
  };
});

export default withTheme(Train, '');
