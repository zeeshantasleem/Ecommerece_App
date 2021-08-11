import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNvigator';
import AccountStackNavigator from './AccountStackNavigator';
import Icon from 'react-native-vector-icons';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          // <MaterialCommunityIcons name="home" color={color} size={size} />
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEditScreen')}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <Icon name="plus-circle" color={color} size={size} />

          // <MaterialCommunityIcons
          //   name="plus-circle"
          //   color={color}
          //   size={size}
          // />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountStackNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="account" color={color} size={size} />
          // <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default BottomNavigator;