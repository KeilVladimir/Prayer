import {Form, Field} from 'react-final-form';
import React from 'react';
import styled from 'styled-components/native';
import {Input} from '../../ui/Input';

const AddPrayer: React.FC = () => {
  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: NewPrayer) => {
    console.log(values);
  };

  interface NewPrayer {
    name: string;
  }

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
