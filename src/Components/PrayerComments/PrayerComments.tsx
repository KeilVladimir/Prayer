import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Comment} from '../Comment';
import {Field, Form} from 'react-final-form';
import {FormApi} from 'final-form';
import {Input} from '../../ui/Input';
import {FormProps} from 'react-final-form';

const PrayerComments: React.FC = () => {
  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: FormProps, form: FormApi<FormProps>) => {
    console.log(values);
    form.reset();
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
export default PrayerComments;
