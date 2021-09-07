import React from 'react';
import styled from 'styled-components/native';
import CheckIcon from '../Icons/Check/Checkbox';
import {TouchableOpacityProps} from 'react-native';

interface CheckBoxProps extends TouchableOpacityProps {
  title: string;
  description: string | null;
  id: number;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <CheckContainer onPress={props.onPress}>
      {!props.checked && <CheckIcon />}
    </CheckContainer>
  );
};
const CheckContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-style: solid;
  border-color: #514d47;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 14px;
`;
export default CheckBox;
