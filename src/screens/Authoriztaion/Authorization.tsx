import React from 'react';
import {Task} from '../../types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SignIn} from '../../Components/SignIn';
import {SignUp} from '../../Components/SignUp';

const Authorization: React.FC<Task> = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </>
  );
};
export default Authorization;
