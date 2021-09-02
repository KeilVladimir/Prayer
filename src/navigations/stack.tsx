import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Desk from '../screens/Desk/Desk';
import {Task} from '../screens/Tesk/Task';
import React from 'react';
import {RootStackParamList} from '../types';
import {Authorization} from '../screens/Authoriztaion';
import {PrayerDetails} from '../screens/PrayerDetails';
import {UserRoutes} from './routes';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#ffffff'},
        }}
        initialRouteName={UserRoutes.AUTHORIZATION}>
        <RootStack.Screen name={UserRoutes.DASK} component={Desk} />
        <RootStack.Screen name={UserRoutes.TASK} component={Task} />
        <RootStack.Screen
          name={UserRoutes.AUTHORIZATION}
          component={Authorization}
        />
        <RootStack.Screen name={UserRoutes.DETAILS} component={PrayerDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
