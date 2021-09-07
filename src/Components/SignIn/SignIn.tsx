import React from 'react';
import {AuthInput} from '../../ui/AuthInput';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {AuthValues} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {requiredAuth} from '../../helpers/validate';
import {requestSignIn} from '../../store/ducks/User/actions';

import {validateEmail} from '../../helpers/validate';
import {getErrorAuth, getStateLoader} from '../../store/ducks/User/selectors';
import {Loader} from '../../ui/Loader';

const SignIn: React.FC = () => {
  const error = useSelector(getErrorAuth);
  const dispatch = useDispatch();
  const isLoader = useSelector(getStateLoader);
  const onSubmit = (values: AuthValues) => {
    dispatch(requestSignIn(values));
  };
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <LogInBox>
          <View>
            <TextHead>Log in</TextHead>
            <TextDescription>
              Welcome to the Prayer! login to continue
            </TextDescription>
          </View>
          <Form
            onSubmit={onSubmit}
            initialValues={{email: '', password: ''}}
            render={({handleSubmit}) => (
              <>
                <Field
                  name="email"
                  component={AuthInput}
                  placeholder={'Email'}
                  validate={validateEmail}
                />
                <Field
                  name="password"
                  component={AuthInput}
                  placeholder={'Password'}
                  validate={requiredAuth}
                  secureTextEntry={true}
                />
                <Button onPress={handleSubmit}>
                  <ButtonText>Continue</ButtonText>
                </Button>
                {error && (
                  <TextError>
                    Ошибка, введен неверный логин или пароль, попробуйте снова
                  </TextError>
                )}
              </>
            )}
          />
        </LogInBox>
      )}
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

const TextError = styled.Text`
  font-size: 16px;
  color: darkred;
  margin-left: 35px;
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
