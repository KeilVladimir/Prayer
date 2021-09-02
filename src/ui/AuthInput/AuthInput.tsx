import React from 'react';
import styled from 'styled-components/native';
import {AuthInput as InputType} from '../../types';

const AuthInput: React.FC<InputType> = props => {
  return (
    <InputStyled
      {...props}
      onChange={props.input.onChange}
      hasError={props.meta.error !== undefined && props.meta.touched}
      value={props.input.value}
    />
  );
};

const InputStyled = styled.TextInput<{hasError?: boolean}>`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 14px;
  border-color: ${props => (props.hasError ? 'red' : '#e5e5e5')};
  color: black;
  border-width: 1px;
  width: auto;
  margin: 0 35px 25px;
  border-radius: 10px;
`;
export default AuthInput;
