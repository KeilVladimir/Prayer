import {Form, Field} from 'react-final-form';
import React from 'react';
import styled from 'styled-components/native';
import {Input} from '../../ui/Input';
import {FormApi} from 'final-form';
import required from '../../helpers/validate';
import {useDispatch} from 'react-redux';
import {requestAddPrayer} from '../../store/ducks/Prayer/actions';

interface AddPrayerProps {
  columnId: number;
}

interface Form {
  title: string;
}

const AddPrayer: React.FC<AddPrayerProps> = ({columnId}) => {
  const dispatch = useDispatch();
  const onSubmit = (values: Form, form: FormApi<Form, Form>) => {
    console.log(values.title);
    dispatch(
      requestAddPrayer({
        title: values.title,
        description: '',
        checked: true,
        columnId: columnId,
      }),
    );
    form.reset();
  };

  return (
    <ContainerForm>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          title: '',
        }}
        render={({handleSubmit}) => (
          <Field
            name="title"
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
