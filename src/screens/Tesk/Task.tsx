import React, {useEffect} from 'react';
import {HeaderDesk} from '../../Components/HeaderDesk';
import styled from 'styled-components/native';
import {Task as TaskType, TaskRouteProp} from '../../types';
import {useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyPrayers from '../MyPrayers/MyPrayers';
import {Notification} from '../../ui/Notification';
import {Subcribes} from '../Subcribes';
import {useDispatch, useSelector} from 'react-redux';
import {getLoader} from '../../store/ducks/Prayer/selectors';
import {Loader} from '../../ui/Loader';
import {requestGetAllPrayer} from '../../store/ducks/Prayer/actions';
import {getToken} from '../../store/ducks/User/selectors';

export const Task: React.FC<TaskType> = () => {
  const route = useRoute<TaskRouteProp>();

  const isLoader = useSelector(getLoader);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    dispatch(requestGetAllPrayer());
  }, [token]);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <TaskContainer>
          <HeaderDesk nameHeader={route.params.nameHeader} />
          <Tab.Navigator
            screenOptions={{
              swipeEnabled: false,
            }}>
            <Tab.Screen
              name="My Prayers"
              component={MyPrayers}
              initialParams={{
                columnId: route.params.columnId,
              }}
            />

            <Tab.Screen
              name="Subcribes"
              component={Subcribes}
              initialParams={{name: ''}}
              options={{
                tabBarBadge: () => <Notification />,
              }}
            />
          </Tab.Navigator>
        </TaskContainer>
      )}
    </>
  );
};

const TaskContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export default Task;
