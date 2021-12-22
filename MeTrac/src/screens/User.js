import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pin from '../../assets/pin.svg';

const User = ({navigation}) => {
  const styles = useStyles();

  const onExit = () => BackHandler.exitApp();

  const onGeneral = () => navigation.navigate('general');

  const onPrivacy = () => navigation.navigate('privacy');

  const onTC = () => navigation.navigate('tc');

  const onAbout = () => navigation.navigate('aboutus');

  const settingsData = [
    {
      name: 'General',
      icon: 'settings',
      onPress: onGeneral,
    },
    {
      name: 'Privacy & Security',
      icon: 'security',
      onPress: onPrivacy,
    },
    {
      name: 'About Us',
      icon: 'people',
      onPress: onAbout,
    },
    {
      name: 'Terms of Use',
      icon: 'app-settings-alt',
      onPress: onTC,
    },
    {
      name: 'Exit',
      icon: 'logout',
      onPress: onExit,
    },
  ];

  const friendsData = ['maha', 'billu', 'zubhinv'];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={item.onPress}>
        <Icon name={item.icon} size={28} style={{marginRight: 16}} />
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderFriends = ({item}) => {
    return (
      <View style={styles.fitem}>
        <Icon
          name="fiber-manual-record"
          color="green"
          style={{alignSelf: 'center'}}
        />
        <Text style={{fontSize: 14, paddingLeft: 8}}>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <LinearGradient
        colors={['#0073e6', '#ffffff']}
        style={{position: 'absolute'}}>
        <View style={styles.bgview} />
      </LinearGradient>
      <View style={styles.main}>
        <ScrollView style={styles.frview}>
          <Pin width={44} height={44} style={styles.pin} />
          <View style={[styles.box, {alignItems: 'center'}]}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
          </View>
          <View style={styles.box}>
            <FlatList data={settingsData} renderItem={renderItem} />
          </View>
          <View style={styles.box}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {' '}
              Your Friends{' '}
            </Text>
            <FlatList data={friendsData} renderItem={renderFriends} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const useStyles = makeStyles(() => {
  const windowWIdth = Dimensions.get('window').width;

  return {
    main: {flex: 1, alignItems: 'center'},
    bgview: {
      width: 500,
      height: 600,
    },
    frview: {
      width: windowWIdth,
      flex: 1,
    },
    pin: {
      marginTop: 20,
      marginBottom: 44,
      alignSelf: 'center',
    },
    box: {
      alignSelf: 'center',
      width: windowWIdth - 40,
      padding: 16,
      backgroundColor: 'snow',
      elevation: 10,
      borderRadius: 12,
      marginBottom: 16,
    },
    item: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,0.4)',
      alignSelf: 'flex-start',
      width: '100%',
      height: 64,
      alignItems: 'center',
      paddingTop: 16,
    },
    itemText: {
      fontSize: 18,
    },
    fitem: {
      flexDirection: 'row',
      paddingVertical: 8,
    },
  };
});

export default withTheme(User, '');
