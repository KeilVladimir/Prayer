import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {DeskNavigationProp} from '../../types';
import {UserRoutes} from '../../navigations/routes';
import {useState} from 'react';
import {Field, Form} from 'react-final-form';
import {RefactorInput} from '../../ui/RefactorInput';
import {useDispatch, useSelector} from 'react-redux';
import {
  requestDeleteColumn,
  requestRenameColumn,
} from '../../store/ducks/Columns/actions';
import {RefactorButton} from '../../ui/RefactorButton';
import {getStateLoader} from '../../store/ducks/Columns/selectors';
import {Loader} from '../../ui/Loader';

interface Column {
  name: string;
  id: number;
}

interface UpdateColumn {
  title: string;
  description: string;
}

export const Column: React.FC<Column> = ({name, id}) => {
  const dispatch = useDispatch();
  const nav = useNavigation<DeskNavigationProp>();
  const isLoader = useSelector(getStateLoader);

  const required = (value?: string) => (value ? '' : true);
  const onSubmit = (values: UpdateColumn) => {
    dispatch(
      requestRenameColumn({
        title: values.title,
        description: '',
        id: id,
      }),
    );
    setIsOpenRename(false);
  };

  const [isOpenRename, setIsOpenRename] = useState<boolean>(false);

  return (
    <ColumnBox
      onPress={() => {
        nav.navigate(UserRoutes.TASK, {nameHeader: name});
      }}
      onLongPress={() => {
        setIsOpenRename(true);
      }}>
      <ColumnStyle>
        {!isOpenRename ? (
          <ColumnText>{name}</ColumnText>
        ) : (
          <Form
            onSubmit={onSubmit}
            initialValues={{
              title: name,
            }}
            render={({handleSubmit}) => (
              <>
                <Field
                  name="title"
                  component={RefactorInput}
                  validate={required}
                  placeholder={'Add a new column...'}
                />
                <ButtonContainer>
                  {isLoader ? (
                    <Loader />
                  ) : (
                    <>
                      <RefactorButton onPress={handleSubmit} name={'Update'} />
                      <RefactorButton
                        name={'Delete'}
                        onPress={() => {
                          dispatch(requestDeleteColumn(id));
                        }}
                      />
                      <RefactorButton
                        name={'Cancel'}
                        onPress={() => {
                          setIsOpenRename(false);
                        }}
                      />
                    </>
                  )}
                </ButtonContainer>
              </>
            )}
          />
        )}
      </ColumnStyle>
    </ColumnBox>
  );
};

const ColumnBox = styled.TouchableWithoutFeedback`
  margin-top: 15px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
`;
const ColumnStyle = styled.View`
  min-height: 59px;
  border: 1px #e5e5e5;
  width: auto;
  border-radius: 4px;
  justify-content: center;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 15px;
  text-align: center;
  background-color: #ffffff;
`;

const ColumnText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: #514d47;
  padding-left: 15px;
`;
