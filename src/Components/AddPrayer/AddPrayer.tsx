import {Form, Field} from 'react-final-form';
import React from 'react';
import styled from 'styled-components/native';
import {Input} from '../../ui/Input';
import {FormApi} from 'final-form';
import {FormProps} from 'react-final-form';
const AddPrayer: React.FC = () => {
  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: FormProps, form: FormApi<FormProps>) => {
    console.log(values);
    form.reset();
  };

  return (
    <ContainerForm>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          prayer: '',
        }}
        render={({handleSubmit}) => (
          <Field
            name="prayer"
            component={Input}
            placeholder="Add a prayer..."
            validate={required}
            prayer
            submit={handleSubmit}
          />
        )}
      />
    </ContainerForm>
  );
};
export default AddPrayer;
const ContainerForm = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
`;
