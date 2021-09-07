import React from 'react';
import {Task} from '../../types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SignIn} from '../../Components/SignIn';
import {SignUp} from '../../Components/SignUp';
import {useSelector} from 'react-redux';
import {getToken} from '../../store/ducks/User/selectors';
import {Desk} from '../Desk';

const Authorization: React.FC<Task> = () => {
  const Tab = createMaterialTopTabNavigator();
  const token = useSelector(getToken);
  if (token !== undefined && token !== '') {
    return <Desk />;
  }
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
