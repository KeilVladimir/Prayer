import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {images} from '../../constains/images';
import Swipeout from 'react-native-swipeout';
import {CheckBox} from '../../ui/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {DetailsNavigationProp} from '../../types';
import {UserIcon} from '../../ui/Icons/User';
import {HandsIcon} from '../../ui/Icons/Hands';

interface PrayerType {
  answered: boolean;
}
const Prayer: React.FC<PrayerType> = ({answered}) => {
  const nav = useNavigation<DetailsNavigationProp>();

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
    },
  ];
  console.log(answered);
  return (
    <Swipeout right={swipeoutBtns} backgroundColor={'#ffffff'} sensitivity={40}>
      <TouchableWithoutFeedback
        onPress={() => {
          nav.navigate('DETAILS');
        }}>
        <PrayerContainer>
          <ImageStateStyled source={images.state2} />
          <CheckBox />
          <TextPrayer answered={answered}>Prayer item two...</TextPrayer>
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
    </Swipeout>
  );
};

const PrayerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 24px;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5; ;
`;

const PrayerBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageStateStyled = styled.Image`
  margin-right: 6px;
`;

const TextPrayer = styled.Text<{answered: boolean}>`
  margin-left: 23px;
  color: #514d47;
  font-size: 17px;
  line-height: 20px;
  text-decoration-color: black;
  text-decoration: ${props => (props.answered ? 'line-through' : 'none')};
`;

const HandIconBox = styled.View`
  margin-right: 5px;
  margin-left: 23px;
`;

const UserIconBox = styled.View`
  margin-right: 5px;
`;
export default Prayer;
