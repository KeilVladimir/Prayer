import React from 'react';
import {AuthInput} from '../../ui/AuthInput';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {AuthValues, DeskNavigationProp} from '../../types';
import {UserRoutes} from '../../navigations/routes';

const SignIn: React.FC = () => {
  const nav = useNavigation<DeskNavigationProp>();

  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: AuthValues) => {
    console.log(values);
    nav.navigate(UserRoutes.DASK);
  };

  return (
    <>
      <LogInBox>
        <View>
          <TextHead>Log in</TextHead>
          <TextDescription>
            Welcome to the Prayer! login to continue
          </TextDescription>
        </View>
        <Form
          onSubmit={onSubmit}
          initialValues={{login: '', password: ''}}
          render={({handleSubmit, values}) => (
            <>
              <Field
                name="login"
                component={AuthInput}
                placeholder={'Login'}
                validate={required}
              />
              <Field
                name="password"
                component={AuthInput}
                placeholder={'Placeholder'}
                validate={required}
              />
              <Button onPress={handleSubmit}>
                <ButtonText>Continue</ButtonText>
              </Button>
            </>
          )}
        />
      </LogInBox>
    </>
  );
};
const LogInBox = styled.View`
  flex: 1;
  justify-content: center;
`;

const TextHead = styled.Text`
  color: #858585;
  font-weight: 500;
  font-size: 23px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

const TextDescription = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #858585;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #bfb393;
  width: auto;
  height: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-top: 13px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
`;
export default SignIn;
