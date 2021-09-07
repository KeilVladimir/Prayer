import React from 'react';
import styled from 'styled-components/native';
import {AuthInput} from '../../types';

const RefactorInput: React.FC<AuthInput> = props => {
  return (
    <>
      <RefactorInputStyled
        {...props}
        onChange={props.input.onChange}
        hasError={props.meta.error !== undefined && props.meta.touched}
        value={props.input.value}
      />
    </>
  );
};
const RefactorInputStyled = styled.TextInput<{hasError?: boolean}>`
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #514d47;
  padding-left: 15px;
  border-width: 1px;
  border-color: ${props => (props.hasError ? 'red' : '#e5e5e5')};
  border-radius: 8px;
  width: auto;
  min-width: 150px;
  margin-top: 5px;
`;
export default RefactorInput;
