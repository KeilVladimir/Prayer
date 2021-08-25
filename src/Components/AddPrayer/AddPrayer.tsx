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
            formName="prayer"
            submit={handleSubmit}
          />
        )}
      />
    </ContainerForm>
  );
};
export default AddPrayer;
const InputBox = styled.View<{isError?: boolean}>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  width: auto;
  margin-right: 15px;
  margin-left: 15px;
  border-color: ${props => (props.isError ? 'red' : '#e5e5e5')};
  padding-left: 15px;
`;
const ButtonStyled = styled.TouchableOpacity``;
const ContainerForm = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
`;
