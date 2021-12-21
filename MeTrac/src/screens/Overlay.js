import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {withTheme, makeStyles, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg1 from '../../assets/trackeasy.svg';
import Svg2 from '../../assets/easyui.svg';
import Svg3 from '../../assets/free.svg';
import database from '@react-native-firebase/database';

const Overlay = ({navigation}) => {
  const styles = useStyles();
  const windowWIdth = Dimensions.get('window').width;

  const [modalVisible, setModalVisible] = React.useState(false);

  const [number, setNumber] = React.useState('');
  const [len, setLen] = React.useState(0);

  const onChange = text => {
    setNumber(text);
    setLen(text.length);
  };

  const validnum = () => {
    setModalVisible(false);
    addToFirebase();
  };

  const invaldnum = () => Alert.alert('Enter 10 digit number and try again !');

  const addToFirebase = () => {
    let isPresent = false,
      uid;

    database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const data = snapshot.val();

        data != null &&
          Object.keys(data).forEach(key => {
            if (data[key].mob == number) {
              isPresent = true;
              uid = key;
            }
          });

        if (isPresent) {
          Alert.alert('Update', 'PhoneNumber Already Exists!', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => navigation.navigate('Bottomtabs', {uid: uid}),
            },
          ]);
        } else {
          addNumber();
        }
      });
  };

  const addNumber = () => {
    let uid;

    database()
      .ref('/users')
      .push({
        mob: number,
        shareAccess: false,
      })
      .then(() => {
        console.log('Data set.');

        database()
          .ref('/users')
          .once('value')
          .then(snapshot => {
            const data = snapshot.val();

            Object.keys(data).forEach(key => {
              if (data[key].mob == number) {
                uid = key;
              }
            });
          });

        Alert.alert('Update', 'PhoneNumber Updated Succcessfully!', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => navigation.navigate('Bottomtabs', {uid: uid}),
          },
        ]);
      });
  };

  const overlayData = [
    {
      svg: <Svg1 width={windowWIdth - 100} height={300} />,
      title: <Text style={styles.titleStyle}>Instant Real Time Location</Text>,
    },
    {
      svg: <Svg2 width={windowWIdth - 100} height={300} />,
      title: <Text style={styles.titleStyle}>Easily Navigatible UI</Text>,
    },
    {
      svg: <Svg3 width={windowWIdth - 100} height={300} />,
      title: (
        <>
          <Text style={{marginBottom: 5, fontSize: 22}}>
            Ad-Free and No hidden Costs
          </Text>
          <View style={styles.iconContainer}>
            <Icon.Button
              style={{backgroundColor: 'snow'}}
              name="arrow-circle-right"
              color="#FFBC34"
              size={45}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </>
      ),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemBody}>
        <View style={styles.item}>
          {item.svg}
          {item.title}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
          {' '}
          Welcome <Text style={{color: 'black'}}>! </Text>{' '}
        </Text>
      </View>
      <FlatList
        data={overlayData}
        renderItem={renderItem}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            width: windowWIdth,
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: windowWIdth - 80,
              height: 300,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingHorizontal: 16,
              borderRadius: 16,
              elevation: 10,
            }}>
            <Text style={{textAlign: 'center'}}>
              Enter your phone-number :{' '}
            </Text>
            <TextInput
              onChangeText={onChange}
              value={number}
              keyboardType="numeric"
              style={{marginTop: 16, fontSize: 22, paddingBottom: 24}}
              underlineColorAndroid="black"
              placeholder="+ 91 "
            />
            <Button
              containerStyle={styles.button}
              titleStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
              title="Submit"
              onPress={len === 10 ? validnum : invaldnum}
            />
            <Text style={{marginTop: 16, fontSize: 12, textAlign: 'center'}}>
              By Clicking here, you agree to the Terms and Conditions of our
              application.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const useStyles = makeStyles(() => {
  const windowWIdth = Dimensions.get('window').width;

  return {
    main: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    itemBody: {
      width: windowWIdth,
    },
    welcome: {
      marginTop: 80,
      marginBottom: 90,
      marginLeft: 20,
    },
    welcomeText: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#FFBC34',
      textShadowColor: 'rgba(0,0,0,0.8)',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
    },
    item: {
      borderWidth: 1,
      margin: 28,
      flex: 1,
      backgroundColor: 'snow',
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleStyle: {
      marginBottom: 100,
      fontSize: 22,
    },
    buttonText: {
      color: 'black',
      fontSize: 22,
    },
    button: {
      marginTop: 24,
      borderRadius: 100,
    },
    buttonStyle: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#FFBC34',
    },
    container: {alignSelf: 'flex-end'},
    iconContainer: {
      width: windowWIdth,
      alignItems: 'flex-end',
      marginRight: 60,
    },
  };
});

export default withTheme(Overlay, '');
