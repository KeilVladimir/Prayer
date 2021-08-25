import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Comment} from '../Comment';
import {Field, Form} from 'react-final-form';
import CommentIcon from '../../ui/Icons/Comment/Comment';
import {Input} from '../../ui/Input';

const PrayerComments: React.FC = () => {
  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: any) => {
    if (values !== '') {
      console.log(values);
    }
  };
  return (
    <>
      <Title>Comments</Title>
      <View>
        <Comment />
        <Comment />
        <Form
          onSubmit={onSubmit}
          initialValues={{
            name: '',
          }}
          render={({handleSubmit}) => (
            <Field
              name="prayer"
              component={Input}
              placeholder="Add a prayer..."
              validate={required}
              submit={handleSubmit}
            />
          )}
        />
      </View>
    </>
  );
};

const Title = styled.Text`
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #72a8bc;
  margin-bottom: 13px;
  margin-left: 15px;
`;
const FieldBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
const InputStyled = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  ::placeholder {
    font-size: 17px;
    line-height: 20px;
    color: #9c9c9c;
  }
`;

const FormBox = styled.View`
  width: 100%;
  flex-direction: row;
`;

const AddButton = styled.TouchableOpacity`
  margin-right: 12px;
`;

const ContainerForm = styled.View`
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 16px;
`;
export default PrayerComments;
