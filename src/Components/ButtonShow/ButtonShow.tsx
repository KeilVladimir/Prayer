import styled from 'styled-components/native';
import React from 'react';
import {ButtonType} from '../../types';

const ButtonShow: React.FC<ButtonType> = ({nameBtn}) => {
  return (
    <ButtonStyle>
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
  margin-left: 83px;
  margin-right: 83px;
  box-shadow: 0 2px 15px rgba(66, 78, 117, 0.1);
  margin-top: 23px;
  margin-bottom: 21px;
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
