import React from 'react';
import {HeaderDesk} from '../../Components/HeaderDesk';
import styled from 'styled-components/native';
import {TaskType, TaskRouteProp} from '../../types';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyPrayers from '../MyPrayers/MyPrayers';
import {Notification} from '../../ui/Notification';
import {Subcribes} from '../Subcribes';

export const Task: React.FC<TaskType> = () => {
  const route = useRoute<TaskRouteProp>();
  const Tab = createMaterialTopTabNavigator();
  return (
    <TaskContainer>
      <HeaderDesk nameHeader={route.params.nameHeader} />
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarLabelStyle: {fontSize: 13, lineHeight: 15},
        }}>
        <Tab.Screen
          name="My Prayers"
          component={MyPrayers}
          options={{
            tabBarBadge: () => <Notification />,
          }}
        />
        <Tab.Screen name="Subcribes" component={Subcribes} />
      </Tab.Navigator>
    </TaskContainer>
  );
};
const TaskContainer = styled.View`
  width: 100%;
  height: 100%;
`;
