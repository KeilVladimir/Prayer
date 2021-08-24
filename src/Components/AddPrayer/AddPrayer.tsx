import {Form, Field} from 'react-final-form';
import React from 'react';
import styled from 'styled-components/native';
import {PlusIcon} from '../../ui/Icons/Add';

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
          name: '',
        }}
        render={({handleSubmit}) => (
          <Field name="name" component="input" type="text" validate={required}>
            {({input, meta}) => (
              <InputBox isError={!!(meta.error && meta.touched)}>
                <ButtonStyled onPress={handleSubmit}>
                  <PlusIcon color={'#72A8BC'} />
                </ButtonStyled>
                <InputStyled
                  value={input.value}
                  onChangeText={input.onChange}
                  placeholder="Add a prayer..."
                />
              </InputBox>
            )}
          </Field>
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
const InputStyled = styled.TextInput`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 14px;
  ::placeholder {
    color: #9c9c9c;
    font-size: 17px;
    line-height: 20px;
  }
`;
