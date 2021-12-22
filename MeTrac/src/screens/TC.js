import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pin from '../../assets/pin.svg';

const TC = () => {
  const styles = useStyles();
  return (
    <>
      <LinearGradient
        colors={['#0073e6', '#ffffff']}
        style={{position: 'absolute'}}>
        <View style={styles.bgview} />
      </LinearGradient>
      <View style={styles.main}>
        {/* <ScrollView style={styles.frview}> */}
        <Pin width={44} height={44} style={styles.pin} />
        <View style={styles.box}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Terms of Use</Text>
        </View>
        <View style={[styles.box, {paddingTop: 32, padding: 24, height: 500}]}>
          <ScrollView>
            <Text style={{paddingBottom: 64}}>
              <Text style={{fontWeight: 'bold'}}>Privacy Policy of MeTrac</Text>
              {'\n'}
              {'\n'}
              In order to receive information about your Personal Data, the
              purposes and the parties the Data is shared with, contact the
              Owner.
              {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>Types of Data collected</Text>
              {'\n'}
              {'\n'}
              The owner does not provide a list of Personal Data types
              collected. Complete details on each type of Personal Data
              collected are provided in the dedicated sections of this privacy
              policy or by specific explanation texts displayed prior to the
              Data collection. Personal Data may be freely provided by the User,
              or, in case of Usage Data, collected automatically when using this
              Application. Unless specified otherwise, all Data requested by
              this Application is mandatory and failure to provide this Data may
              make it impossible for this Application to provide its services.
              In cases where this Application specifically states that some Data
              is not mandatory, Users are free not to communicate this Data
              without consequences to the availability or the functioning of the
              Service. Users who are uncertain about which Personal Data is
              mandatory are welcome to contact the Owner. {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>The rights of Users</Text>
              {'\n'}
              {'\n'}
              Users may exercise certain rights regarding their Data processed
              by the Owner.
              {'\n'}
              In particular, Users have the right to do the following:
              {'\n'}
              Withdraw their consent at any time. Users have the right to
              withdraw consent where they have previously given their consent to
              the processing of their Personal Data.
              {'\n'}Object to processing of their Data. Users have the right to
              object to the processing of their Data if the processing is
              carried out on a legal basis other than consent.
              {'\n'}
              Access their Data. Users have the right to learn if Data is being
              processed by the Owner.
              {'\n'}
              Verify and seek rectification. Users have the right to verify the
              accuracy of accuracy of their Data and ask for it to be updated or
              corrected.
              {'\n'}
              Restrict the processing of their Data. Users have the right, under
              certain circumstances, to restrict the processing of their Data.
              {'\n'}
              Have their Personal Data deleted or otherwise removed.
              {'\n'}
              Receive their Data and have ittransferred to another controller.
              Users have the right to receive their Data in a structured,
              commonly used and machine readable format and, if technically
              feasible, to have it transmitted to another controller without any
              hindrance.
              {'\n'}
              Lodge a complaint. Users have the right to bring a claim before
              their competent data protection authority.
              {'\n'}
            </Text>
          </ScrollView>
        </View>
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
      marginBottom: 64,
      alignSelf: 'center',
    },
    box: {
      alignSelf: 'center',
      width: windowWIdth - 40,
      padding: 16,
      backgroundColor: 'snow',
      elevation: 10,
      borderRadius: 12,
      marginBottom: 24,
      alignItems: 'center',
    },
  };
});

export default withTheme(TC, '');
