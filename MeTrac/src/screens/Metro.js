import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pin from '../../assets/pin.svg';

const Metro = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <LinearGradient colors={['#0073e6', '#ffffff']}>
        <View style={styles.bgview} />
      </LinearGradient>
      <ScrollView style={styles.frview}>
        <Pin width={44} height={44} style={styles.pin} />
        <View style={[styles.box, styles.trackStyle]}>
          <View style={styles.trackin}>
            <View
              style={{
                position: 'absolute',
                width: 100,
                height: 100,
                right: -60,
                bottom: -18,
                alignItems: 'center',
              }}>
              <Icon name="caret-down" color="#FFBC34" size={120} />
            </View>
            <View>
              <Text style={styles.head}>Track</Text>
              <Text style={styles.text}>
                Track a friend's Metro travel status !
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="arrow-circle-down"
                size={70}
                color="#FFBC34"
                onPress={() => navigation.navigate('Track')}
              />
            </View>
          </View>
        </View>
        <View style={[styles.box, styles.shareStyle]}>
          <View style={styles.sharein}>
            <View
              style={{
                position: 'absolute',
                width: 100,
                height: 100,
                left: -60,
                top: -56,
                alignItems: 'center',
              }}>
              <Icon name="caret-up" color="black" size={120} />
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="arrow-circle-up"
                size={70}
                color="black"
                onPress={() => navigation.navigate('Bus')}
              />
            </View>
            <View>
              <Text style={styles.head}>Share</Text>
              <Text style={styles.text}>
                Share your Metro travel status with a friend !
              </Text>
            </View>
          </View>
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
      height: 250,
      alignSelf: 'flex-start',
      width: windowWIdth - 54,
      elevation: 10,
      marginBottom: 68,
    },
    trackStyle: {
      backgroundColor: '#FFBC34',
      borderTopRightRadius: 12,
    },
    shareStyle: {
      backgroundColor: '#000000',
      alignSelf: 'flex-end',
      borderBottomLeftRadius: 12,
    },
    trackin: {
      flex: 1,
      marginTop: 30,
      marginRight: 20,
      borderTopRightRadius: 12,
      elevation: 10,
      backgroundColor: 'snow',
      paddingTop: 30,
      paddingLeft: 22,
      flexDirection: 'row',
    },
    sharein: {
      paddingTop: 30,
      paddingRight: 22,
      flex: 1,
      marginBottom: 30,
      marginLeft: 20,
      borderBottomLeftRadius: 12,
      elevation: 10,
      backgroundColor: 'snow',
      flexDirection: 'row',
    },
    text: {width: 160, lineHeight: 24, fontSize: 16},
    head: {
      fontSize: 36,
      marginBottom: 32,
      fontWeight: '900',
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 16,
    },
  };
});

export default withTheme(Metro, '');
