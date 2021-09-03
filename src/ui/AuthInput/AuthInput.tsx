import React from 'react';
import styled from 'styled-components/native';
import {AuthInput as InputType} from '../../types';
import {Text} from 'react-native';

const AuthInput: React.FC<InputType> = props => {
  return (
    <InputBox>
      <InputStyled
        {...props}
        onChange={props.input.onChange}
        hasError={props.meta.error !== undefined && props.meta.touched}
        value={props.input.value}
      />
      {props.meta.error && props.meta.touched && (
        <TextError>{props.meta.error}</TextError>
      )}
    </InputBox>
  );
};

const InputStyled = styled.TextInput<{hasError?: boolean}>`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 14px;
  border-color: ${props => (props.hasError ? 'darkred' : '#e5e5e5')};
  color: black;
  border-width: 1px;
  width: auto;
  border-radius: 10px;
`;
const InputBox = styled.View`
  margin: 0 35px 25px;
`;
const TextError = styled.Text`
  color: darkred;
  margin-top: 5px;
  font-size: 15px;
`;
export default AuthInput;
