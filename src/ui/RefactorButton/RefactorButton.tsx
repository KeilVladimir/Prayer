import styled from 'styled-components/native';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

interface RefactorButtonTypes extends TouchableOpacityProps {
  name: string;
}

const RefactorButton: React.FC<RefactorButtonTypes> = props => {
  return (
    <Button onPress={props.onPress}>
      <TextButton>
        <TextButton>{props.name}</TextButton>
      </TextButton>
    </Button>
  );
};

const TextButton = styled.Text`
  color: #ffffff;
  font-size: 15px;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  min-width: 50px;
  width: auto;
  max-width: 70px;
  height: auto;
  min-height: 30px;
  border-radius: 5px;
  background-color: #bfb393;
  margin-left: 15px;
  margin-bottom: 5px;
  padding: 5px;
  margin-top: 10px;
`;
export default RefactorButton;
