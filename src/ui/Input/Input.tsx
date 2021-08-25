import styled from 'styled-components/native';
import {Input as InputType} from '../../types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PlusIcon} from '../Icons/Add';
import {CommentIcon} from '../Icons/Comment';

const Input: React.FC<InputType> = props => {
  if (props.prayer) {
    return (
      <InputBoxPrayer
        isError={props.meta.error !== undefined && props.meta.touched}>
        <TouchableOpacity onPress={props.submit ? props.submit : () => {}}>
          <PlusIcon color={'#72A8BC'} />
        </TouchableOpacity>
        <InputStyled
          {...props}
          onChange={props.input.onChange}
          value={props.input.value}
        />
      </InputBoxPrayer>
    );
  }

  return (
    <InputBoxComment>
      <AddButton>
        <CommentIcon />
      </AddButton>
      <InputComment
        {...props}
        onChange={props.input.onChange}
        value={props.input.value}
      />
    </InputBoxComment>
  );
};

const InputStyled = styled.TextInput<{hasError?: boolean}>`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 14px;
  ::placeholder {
    color: #9c9c9c;
    font-size: 17px;
    line-height: 20px;
  }
`;
const InputBoxPrayer = styled.View<{isError?: boolean}>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  width: auto;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 10px;
  border-color: ${props => (props.isError ? 'red' : '#e5e5e5')};
  padding-left: 15px;
`;
const InputBoxComment = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;
const InputComment = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  ::placeholder {
    font-size: 17px;
    line-height: 20px;
    color: #9c9c9c;
  }
`;
const AddButton = styled.TouchableOpacity`
  margin-right: 12px;
`;
export default Input;
