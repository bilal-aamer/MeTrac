import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Button, makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pin from '../../assets/pin.svg';

import database from '@react-native-firebase/database';

const Track = props => {
  const [fnum, setFnum] = useState('');

  const [cnt, setCnt] = useState(0);

  const [arr, setArry] = useState([]);

  React.useEffect(() => {
    database()
      .ref('/users/' + props.uid)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();

        if (Object.keys(data).length !== 2) {
          setArry(data[Object.keys(data)[2]]);
        }
      });
  });

  const onChange = text => {
    setFnum(text);
  };

  const permissions = () => {
    let allow = false;
    database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();

        Object.keys(data).forEach(key => {
          console.log(data[key].mob, ' ', data[key].shareAccess, fnum);

          if (data[key].mob == fnum && data[key].shareAccess) {
            allow = true;
            addToFirebase();
          }
        });

        if (!allow) {
          Alert.alert(
            'Reminder',
            'Ask your friend to share his/her location to track !',
            [
              {
                text: 'OK',
                onPress: () => null,
              },
            ],
          );
        }
      });
  };

  const addToFirebase = () => {
    let array = arr,
      count = cnt;

    array[count] = fnum;

    setArry(array);
    setCnt(cnt + 1);

    database()
      .ref('/users/' + props.uid)
      .update({
        fmob: arr,
        cnt: count + 1,
      })
      .then(() => console.log('Data set.'));
  };

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
            <Icon name="announcement" color="red" size={28} />
            {'   '}
            Reminder
          </Text>
          <Text style={{lineHeight: 24, fontSize: 16, marginBottom: 12}}>
            Ask your friend to share his/her location to track.
          </Text>
        </View>
        <View style={{paddingHorizontal: 24}}>
          <Text style={styles.Text}>Enter your friend's phone-number : </Text>
          <TextInput
            onChangeText={onChange}
            value={fnum}
            keyboardType="numeric"
            style={{marginTop: 16, fontSize: 22, paddingBottom: 24}}
            underlineColorAndroid="black"
            placeholder="+ 91 "
          />
          <Button
            containerStyle={styles.button}
            titleStyle={styles.buttonText}
            buttonStyle={styles.buttonStyle}
            title="Track"
            onPress={permissions}
          />
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
      paddingHorizontal: 26,
      paddingVertical: 16,
      backgroundColor: 'snow',
      elevation: 10,
      borderRadius: 12,
      marginBottom: 64,
    },
    Text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textShadowColor: 'snow',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
    },
    button: {
      marginVertical: 100,
      borderRadius: 100,
      alignSelf: 'center',
    },
    buttonText: {
      paddingHorizontal: 80,
      paddingVertical: 2,
      color: 'black',
      fontSize: 24,
    },
    buttonStyle: {
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: '#FFBC34',
    },
  };
});

export default withTheme(Track, '');
