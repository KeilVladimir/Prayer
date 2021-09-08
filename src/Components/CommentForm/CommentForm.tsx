import React from 'react';
import {Field, Form} from 'react-final-form';
import {Input} from '../../ui/Input';
import required from '../../helpers/validate';
import {FormApi} from 'final-form';
import {requestAddComment} from '../../store/ducks/Comment/actions';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

interface FormValues {
  body: string;
}

interface CommentFormProps {
  id: number;
}

const CommentForm: React.FC<CommentFormProps> = ({id}) => {
  const dispatch = useDispatch();

  const onSubmit = (
    values: FormValues,
    form: FormApi<FormValues, FormValues>,
  ) => {
    dispatch(
      requestAddComment({
        body: values.body,
        id: id,
      }),
    );
    form.reset();
  };

  return (
    <FormBox>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          body: '',
        }}
        render={({handleSubmit}) => (
          <Field
            name="body"
            component={Input}
            placeholder="Add a prayer..."
            validate={required}
            submit={handleSubmit}
          />
        )}
      />
    </FormBox>
  );
};

const FormBox = styled.View`
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  position: absolute;
`;

export default CommentForm;
