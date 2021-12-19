import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {withTheme, makeStyles} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg1 from '../../assets/trackeasy.svg';
import Svg2 from '../../assets/easyui.svg';
import Svg3 from '../../assets/free.svg';

const Overlay = ({navigation}) => {
  const styles = useStyles();
  const windowWIdth = Dimensions.get('window').width;

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
              onPress={() => navigation.navigate('Bottomtabs')}
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
      fontSize: 32,
    },
    buttonStyle: {
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: '#FFBC34',
      alignSelf: 'flex-end',
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
