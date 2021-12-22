import React, {useEffect} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pin from '../../assets/pin.svg';
import database from '@react-native-firebase/database';
import {useRoute} from '@react-navigation/native';

const Tracker = props => {
  const styles = useStyles();

  const route = useRoute();

  const windowWIdth = Dimensions.get('window').width;

  const [src, setSrc] = React.useState('');
  const [dest, setDest] = React.useState('');

  useEffect(() => {
    database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const data = snapshot.val();
        let uid;
        data != null &&
          Object.keys(data).forEach(key => {
            if (data[key].mob == route.params.fnum) {
              uid = key;
            }
          });

        database()
          .ref('/users/' + uid)
          .once('value')
          .then(snap => {
            console.log('User data: ', snap.val());
            const dat = snap.val();
            setSrc(dat.src);
            setDest(dat.dest);
          });
      });
  });

  return (
    <View style={styles.main}>
      <LinearGradient colors={['#0073e6', '#ffffff']}>
        <View style={styles.bgview} />
      </LinearGradient>
      <ScrollView style={styles.frview}>
        <Pin width={44} height={44} style={styles.pin} />
        <View>
          <Text style={{textAlign: 'center'}}>From : {src}</Text>
          <Text style={{textAlign: 'center'}}>To: {dest}</Text>
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
  };
});

export default withTheme(Tracker, '');
