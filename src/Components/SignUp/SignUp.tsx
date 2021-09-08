import React from 'react';
import {AuthInput} from '../../ui/AuthInput';
import {Field, Form} from 'react-final-form';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {AuthValues} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {requestSignUp} from '../../store/ducks/User/actions';
import {requiredAuth, validateEmail} from '../../helpers/validate';
import {getErrorReg, getStateLoader} from '../../store/ducks/User/selectors';
import {Loader} from '../../ui/Loader';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getErrorReg);
  const isLoaded = useSelector(getStateLoader);

  const onSubmit = (values: AuthValues) => {
    dispatch(requestSignUp(values));
  };

  return (
    <>
      {isLoaded ? (
        <Loader />
      ) : (
        <SignUpBox>
          <View>
            <TextHead>Registration</TextHead>
            <TextDescription>
              Welcome to the Prayer! Register to continue
            </TextDescription>
          </View>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              password: '',
              login: '',
              name: '',
            }}
            render={({handleSubmit}) => (
              <>
                <Field
                  name="email"
                  component={AuthInput}
                  placeholder={'Login'}
                  validate={validateEmail}
                />
                <Field
                  name="name"
                  component={AuthInput}
                  placeholder={'Name'}
                  validate={requiredAuth}
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
              </>
            )}
          />
          {error && (
            <TextError>
              Произошла ошибка , такой пользователь уже существует
            </TextError>
          )}
        </SignUpBox>
      )}
    </>
  );
};
const SignUpBox = styled.View`
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

const TextError = styled.Text`
  font-size: 16px;
  color: darkred;
  margin-left: 35px;
`;
export default SignUp;
