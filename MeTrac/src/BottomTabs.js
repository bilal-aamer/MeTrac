import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MetroStack from './stacks/MetroStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View} from 'react-native';
import Train from './screens/Train';
import Bus from './screens/Bus';
import UserStack from './stacks/UserStack';

const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  const focusColor = 'red';
  const nonFocusColor = 'rgba(0,0,0,0.4)';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'snow',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          height: 80,
          borderRadius: 20,
          elevation: 10,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name="train"
                size={focused ? 28 : 24}
                color={focused ? focusColor : nonFocusColor}
              />
              <Text
                style={{
                  color: focused ? focusColor : nonFocusColor,
                  fontSize: focused ? 12 : 10,
                  paddingTop: 4,
                }}>
                METRO
              </Text>
            </View>
          ),
        }}
        name="Metro"
        children={() => <MetroStack uid={route.params.uid} />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name="bus"
                size={focused ? 28 : 24}
                color={focused ? focusColor : nonFocusColor}
              />
              <Text
                style={{
                  color: focused ? focusColor : nonFocusColor,
                  fontSize: focused ? 12 : 10,
                  paddingTop: 4,
                }}>
                BUS
              </Text>
            </View>
          ),
        }}
        name="Bus"
        component={Bus}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name="subway"
                size={focused ? 28 : 24}
                color={focused ? focusColor : nonFocusColor}
              />
              <Text
                style={{
                  color: focused ? focusColor : nonFocusColor,
                  fontSize: focused ? 12 : 10,
                  paddingTop: 4,
                }}>
                TRAIN
              </Text>
            </View>
          ),
        }}
        name="Train"
        component={Train}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                borderLeftWidth: 1,
                paddingHorizontal: 28,
                borderColor: nonFocusColor,
              }}>
              <Icon
                name="user"
                size={focused ? 28 : 24}
                color={focused ? focusColor : nonFocusColor}
              />
              <Text
                style={{
                  color: focused ? focusColor : nonFocusColor,
                  fontSize: focused ? 12 : 10,
                  paddingTop: 4,
                }}>
                ME
              </Text>
            </View>
          ),
        }}
        name="Settings"
        component={UserStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
