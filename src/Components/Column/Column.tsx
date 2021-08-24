import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {DeskNavigationProp} from '../../types';
import {UserRoutes} from '../../navigations/routes';

interface Column {
  name: string;
}

export const Column: React.FC<Column> = ({name}) => {
  const nav = useNavigation<DeskNavigationProp>();

  return (
    <ColumnBox
      onPress={() => {
        nav.navigate(UserRoutes.TASK, {nameHeader: name});
      }}>
      <ColumnStyle>
        <ColumnText>{name}</ColumnText>
      </ColumnStyle>
    </ColumnBox>
  );
};

const ColumnBox = styled.TouchableWithoutFeedback`
  margin-top: 15px;
`;

const ColumnStyle = styled.View`
  height: 59px;
  border: 1px #e5e5e5;
  width: auto;
  border-radius: 4px;
  justify-content: center;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 15px;
  text-align: center;
  background-color: #ffffff;
`;

const ColumnText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #514d47;
  padding-left: 15px;
`;
