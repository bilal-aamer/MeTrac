import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import {Button, makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pin from '../../assets/pin.svg';
import Sharesvg from '../../assets/currLocation.svg';

import database from '@react-native-firebase/database';

const Share = props => {
  const onSubmit = () => {
    setModalVisible(false);
    toggleShare();
    database()
      .ref('/users/' + props.uid)
      .update({
        src: src,
        dest: dest,
      });
  };

  const styles = useStyles();

  const windowWIdth = Dimensions.get('window').width;

  const [shareAccess, setShareAccess] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [src, setSrc] = useState('');

  const [dest, setDest] = useState('');

  const toggleShare = () => {
    database()
      .ref('/users/' + props.uid)
      .update({
        shareAccess: !shareAccess,
      });
    setShareAccess(!shareAccess);
  };

  React.useEffect(() => {
    database()
      .ref('/users/' + props.uid)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();

        if (Object.keys(data).length !== 4) {
          setShareAccess(data[Object.keys(data)[2]]);
        }
      });
  });

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
            This allows others to see your Location. Press{' '}
            <Text style={{fontWeight: 'bold'}}>Share</Text> to start.
          </Text>
        </View>
        <Sharesvg width={200} height={200} style={{alignSelf: 'center'}} />
        <Button
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          title={shareAccess ? 'stop sharing' : 'Share'}
          onPress={shareAccess ? toggleShare : () => setModalVisible(true)}
        />
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            width: windowWIdth,
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: windowWIdth - 80,
              height: 340,
              backgroundColor: 'white',
              paddingTop: 30,
              paddingHorizontal: 24,
              borderRadius: 16,
              elevation: 10,
            }}>
            <Text>Enter your source station : </Text>
            <TextInput
              onChangeText={text => setSrc(text)}
              value={src}
              style={{
                marginTop: 4,
                fontSize: 22,
                paddingBottom: 12,
                marginBottom: 24,
              }}
              underlineColorAndroid="black"
              placeholder="source"
            />
            <Text>Enter your destination station : </Text>
            <TextInput
              onChangeText={text => setDest(text)}
              value={dest}
              style={{
                marginTop: 4,
                fontSize: 22,
                paddingBottom: 12,
                marginBottom: 24,
              }}
              underlineColorAndroid="black"
              placeholder="destination"
            />
            <Button
              containerStyle={[styles.button, {marginVertical: 24}]}
              titleStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
              title="Submit"
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
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

export default withTheme(Share, '');
