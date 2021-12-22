import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        <View style={styles.box}>
          <Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom: 16}}>
            <Icon name="hourglass-start" color="red" size={22} />
            {'   '}
            Under Construction
          </Text>
          <Text style={{lineHeight: 24, fontSize: 16, marginBottom: 32}}>
            Stay Tuned.. This page is COMING SOON.
          </Text>
          <Text style={{fontFamily: 'monospace', color: 'blue'}}>
            #taggedeyley
          </Text>
        </View>
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
    box: {
      alignSelf: 'center',
      width: windowWIdth - 80,
      padding: 56,
      backgroundColor: 'snow',
      elevation: 10,
      borderRadius: 12,
    },
  };
});

export default withTheme(Train, '');
