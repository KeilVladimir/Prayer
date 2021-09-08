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
import required from '../../helpers/validate';
import Swipeout from 'react-native-swipeout';

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
  const isLoaded = useSelector(getStateLoader);

  const deleteColumn = () => {
    dispatch(requestDeleteColumn(id));
  };

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: deleteColumn,
    },
  ];

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

  const navigateToTask = () => {
    nav.navigate(UserRoutes.TASK, {nameHeader: name, columnId: id});
  };

  const setIsOpen = () => {
    setIsOpenRename(!isOpenRename);
  };

  const [isOpenRename, setIsOpenRename] = useState<boolean>(false);

  return (
    <Test>
      <Swipeout
        right={swipeoutBtns}
        backgroundColor={'#ffffff'}
        sensitivity={40}>
        <ColumnBox
          onLongPress={setIsOpen}
          onPress={navigateToTask}
          delayLongPress={900}>
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
                    />
                    <ButtonContainer>
                      {isLoaded ? (
                        <Loader />
                      ) : (
                        <>
                          <RefactorButton
                            onPress={handleSubmit}
                            name={'Update'}
                          />
                          <RefactorButton name={'Cancel'} onPress={setIsOpen} />
                        </>
                      )}
                    </ButtonContainer>
                  </>
                )}
              />
            )}
          </ColumnStyle>
        </ColumnBox>
      </Swipeout>
    </Test>
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
const Test = styled.View`
  margin-bottom: 10px;
`;
