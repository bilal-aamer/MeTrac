import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {makeStyles, withTheme} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pin from '../../assets/pin.svg';

const About = () => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <LinearGradient colors={['#0073e6', '#ffffff']}>
        <View style={styles.bgview} />
      </LinearGradient>
      <ScrollView style={styles.frview}>
        <Pin width={44} height={44} style={styles.pin} />
        <View style={styles.box}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>About Us</Text>
        </View>
        <View style={[styles.box, {paddingTop: 32, padding: 24, height: 500}]}> 
          <ScrollView>
            <Text style={{paddingBottom: 64}}>
              <Text style={{fontWeight: 'bold'}}>ABOUT APP :</Text>
              {'\n'}
              {'\n'}
              Welcome to MeTrac, your number one source for tracking. We're
              dedicated in giving the best of connecting your pals, with a
              focus.
              {'\n'}
              {'\n'}
              Founded in 2021, MeTrac has come a long way from its beginnings in
              HYDERABAD. When we first started out, our passion for safe
              innovation drove us to start this, so that MeTrac can offer you a
              good interface and experience in connecting your friends. We are
              thrilled that we're able to turn our passion into our own
              application.
              {'\n'}
              {'\n'}
              We hope you enjoy our application as much as we enjoy offering
              them to you. If you have any questions or comments, please don't
              hesitate to contact us.
              {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>OUR MISSION :</Text>
              {'\n'}
              {'\n'}
              To decide our strength in the present and up coming programming
              innovations by conveying modern arrangements that keep them
              serving and remaining for more.
              {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>OUR VISION :</Text>
              {'\n'}
              {'\n'}
              To acquire profound respect from the supporters over the globe and
              distinctive verticals of the business by conveying intriguing yet
              answers for their issues/challenges.
              {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>OUR TEAM :</Text>
              {'\n'}
              {'\n'}
              We’re client focused application designers.
              {'\n'}
              {'\n'}
              Our master group of application designers utilise more intelligent
              and friendlier routes for our customers and their clients to draw
              in with innovation, making remarkable client encounters.
              {'\n'}
              {'\n'}
              We don't make due with OK, we consistently make progress toward
              magnificence. It's this enthusiasm that enables our customers to
              change transformation rates, enhance mark notorieties, win grants
              and remain on top of things, after quite a long time.
              {'\n'}
              {'\n'}
              We pride ourselves on building long haul associations with our
              customers, attempting to enable them to accomplish their business
              objectives. You'll work specifically with the application
              engineers themselves, auditing and teaming up with them on each
              phase of the procedure.
            </Text>
          </ScrollView>
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

export default withTheme(About, '');
