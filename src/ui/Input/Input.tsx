import React from 'react';
import styled from 'styled-components/native';
import {Input as InputType} from '../../types';
const Input: React.FC<InputType> = ({placeholder, color, ...props}) => {
  console.log('Color ', color);
  return <InputStyled color={color} placeholder={placeholder} {...props} />;
};

const InputStyled = styled.TextInput<{color?: boolean}>`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 14px;
  border-color: ${props => (props.color ? 'red' : '#e5e5e5')};
  color: black;
  border-width: 1px;
  width: auto;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 25px;
  border-radius: 10px;
  //::placeholder {
  //  color: red;
  //  font-size: 17px;
  //  line-height: 20px;
  //}
`;
export default Input;
