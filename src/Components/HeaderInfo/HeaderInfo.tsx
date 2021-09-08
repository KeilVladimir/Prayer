import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {HandsIcon} from '../../ui/Icons/Hands';
import {Back} from '../../ui/Icons/Back';

const HeaderInfo: React.FC = () => {
  const nav = useNavigation();

  const goBack = () => {
    nav.goBack();
  };
  return (
    <HeaderDetails>
      <HeaderDetailsNav>
        <TouchableOpacity onPress={goBack}>
          <Back />
        </TouchableOpacity>
        <HandsIcon color={'#e5e5e5'} />
      </HeaderDetailsNav>
      <HeaderDescription>
        Prayer item two which is for my family to love God whole heartedly.
      </HeaderDescription>
    </HeaderDetails>
  );
};
const HeaderDetails = styled.View`
  background-color: #bfb393;
  width: 100%;
  padding-left: 20px;
  padding-right: 17px;
  padding-bottom: 23px;
`;
const HeaderDetailsNav = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 20px;
  justify-content: space-between;
`;
const HeaderDescription = styled.Text`
  color: #ffffff;
  font-size: 17px;
  line-height: 27px;
`;
export default HeaderInfo;
