import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Comment} from '../Comment';
import {Field, Form} from 'react-final-form';
import CommentIcon from '../../ui/Icons/Comment/Comment';

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
        <ContainerForm>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              name: '',
            }}
            render={({handleSubmit}) => (
              <FormBox>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  validate={required}>
                  {({input}) => (
                    <FieldBox>
                      <AddButton onPress={handleSubmit}>
                        <CommentIcon />
                      </AddButton>
                      <InputStyled
                        value={input.value}
                        onChangeText={input.onChange}
                        placeholder="Add a comment..."
                      />
                    </FieldBox>
                  )}
                </Field>
              </FormBox>
            )}
          />
        </ContainerForm>
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
