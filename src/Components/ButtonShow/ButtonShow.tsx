import styled from 'styled-components/native';
import React from 'react';
import {Button} from '../../types';

const ButtonShow: React.FC<Button> = ({nameBtn, onPress}) => {
  return (
    <ButtonStyle onPress={onPress}>
      <ButtonText>{nameBtn}</ButtonText>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.TouchableOpacity`
  background-color: #bfb393;
  width: auto;
  height: 30px;
  border-radius: 15px;
  padding-top: 7px;
  box-shadow: 0 2px 15px rgba(66, 78, 117, 0.1);
  margin-right: 83px;
  margin-left: 83px;
  margin-top: 29px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14.32px;
  text-align: center;
  padding-left: 17px;
  padding-right: 17px;
`;
export default ButtonShow;
