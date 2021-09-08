import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {images} from '../../constains/images';
import Swipeout from 'react-native-swipeout';
import {CheckBox} from '../../ui/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {UserIcon} from '../../ui/Icons/User';
import {HandsIcon} from '../../ui/Icons/Hands';
import {UserRoutes} from '../../navigations/routes';
import {Details} from '../../types';
import {useDispatch} from 'react-redux';
import {
  requestDeletePrayer,
  requestUpdatePrayer,
} from '../../store/ducks/Prayer/actions';
import {Field, Form} from 'react-final-form';
import {RefactorInput} from '../../ui/RefactorInput';
import required from '../../helpers/validate';
import {RefactorButton} from '../../ui/RefactorButton';
import {Prayer as PrayerProps} from '../../store/ducks/Prayer/types';
import {deleteString} from '../../helpers/validate';

interface Form {
  title: string;
}

const Prayer: React.FC<PrayerProps> = ({checked, title, id, description}) => {
  const [isOpenInput, setIsOpenInput] = useState<boolean>(true);
  const nav = useNavigation<Details>();
  const dispatch = useDispatch();

  const updatePrayer = () => {
    dispatch(
      requestUpdatePrayer({
        title: title,
        checked: !checked,
        description: description,
        id: id,
      }),
    );
  };

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: () => {
        dispatch(requestDeletePrayer(id));
      },
    },
  ];

  const onSubmit = (values: Form) => {
    dispatch(
      requestUpdatePrayer({
        title: values.title,
        checked: checked,
        description: description,
        id: id,
      }),
    );
    setIsOpenInput(!isOpenInput);
  };

  const setIsOpen = () => {
    setIsOpenInput(!isOpenInput);
  };

  const navigateToDetails = () => {
    nav.navigate(UserRoutes.DETAILS, {id: id});
  };

  return (
    <>
      <Swipeout
        right={swipeoutBtns}
        backgroundColor={'#ffffff'}
        sensitivity={40}>
        {isOpenInput ? (
          <TouchableWithoutFeedback
            onPress={navigateToDetails}
            onLongPress={setIsOpen}>
            <PrayerContainer>
              <PrayerBox>
                <ImageStateStyled source={images.state2} />
                <CheckBox
                  checked={checked}
                  title={title}
                  description={description}
                  id={id}
                  onPress={updatePrayer}
                />
                <TextPrayer answered={checked}>
                  {deleteString(title)}
                </TextPrayer>
              </PrayerBox>
              <PrayerBox>
                <UserIconBox>
                  <UserIcon />
                </UserIconBox>
                <Text>123</Text>
                <HandIconBox>
                  <HandsIcon color={'#72A8BC'} />
                </HandIconBox>
                <Text>123</Text>
              </PrayerBox>
            </PrayerContainer>
          </TouchableWithoutFeedback>
        ) : (
          <FormBox>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                title: title,
              }}
              render={({handleSubmit}) => (
                <ButtonBox>
                  <Field
                    name="title"
                    component={RefactorInput}
                    validate={required}
                    placeholder={'Add a new column...'}
                  />
                  <RefactorButton name={'Update'} onPress={handleSubmit} />
                  <RefactorButton name={'Cancel'} onPress={setIsOpen} />
                </ButtonBox>
              )}
            />
          </FormBox>
        )}
      </Swipeout>
    </>
  );
};

const PrayerContainer = styled.View`
  flex-direction: row;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 24px;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  height: auto;
`;
const FormBox = styled.View`
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
`;
const PrayerBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageStateStyled = styled.Image`
  margin-right: 12px;
`;

const ButtonBox = styled.View`
  padding-bottom: 20px;
  flex-direction: row;
`;

const TextPrayer = styled.Text<{answered: boolean}>`
  margin-left: 15px;
  color: #514d47;
  font-size: 17px;
  line-height: 20px;
  text-decoration-color: black;
  text-decoration: ${props => (props.answered ? 'none' : 'line-through')};
`;

const HandIconBox = styled.View`
  margin-right: 5px;
  margin-left: 23px;
`;

const UserIconBox = styled.View`
  margin-right: 5px;
`;
export default Prayer;
