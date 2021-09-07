import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import {requestAddColumn} from '../../store/ducks/Columns/actions';
import {Field, Form} from 'react-final-form';
import {RefactorInput} from '../RefactorInput';
import {RefactorButton} from '../RefactorButton';
import {useDispatch} from 'react-redux';
import {FormApi} from 'final-form';

interface ModalColumn {
  setIsOpenModal: (isOpenModal: boolean) => void;
}

interface NewColumn {
  title: string;
  description: string;
}

const ModalColumn: React.FC<ModalColumn> = props => {
  const dispatch = useDispatch();

  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: NewColumn, form: FormApi<NewColumn, NewColumn>) => {
    dispatch(requestAddColumn(values));
    props.setIsOpenModal(false);
    form.reset();
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <ModalBox>
        <FormBox>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              title: '',
              description: '',
            }}
            render={({handleSubmit}) => (
              <>
                <TextModal>Adding Column</TextModal>
                <Field
                  name="title"
                  component={RefactorInput}
                  validate={required}
                  placeholder={'Add column'}
                />
                <ButtonBox>
                  <RefactorButton name={'Add'} onPress={handleSubmit} />
                  <RefactorButton
                    name={'Cancel'}
                    onPress={() => props.setIsOpenModal(false)}
                  />
                </ButtonBox>
              </>
            )}
          />
        </FormBox>
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextModal = styled.Text`
  font-size: 18px;
`;

const FormBox = styled.View`
  background-color: #ffffff;
  padding: 10px;
  width: 70%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  height: auto;
  border-radius: 8px;
  border-width: 1px;
  border-color: #514d47;
`;
const ButtonBox = styled.View`
  flex-direction: row;
  height: auto;
  max-height: 40px;
`;
export default ModalColumn;
