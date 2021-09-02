import React from 'react';
import styled from 'styled-components/native';
import {PlusIcon} from '../../ui/Icons/Add';

const PrayerMembers: React.FC = () => {
  return (
    <MembersContainer>
      <Title>members</Title>
      <MembersBox>
        <Member />
        <Member />
        <Member />
        <AddMember>
          <PlusIcon color={'#ffffff'} />
        </AddMember>
      </MembersBox>
    </MembersContainer>
  );
};
const MembersBox = styled.View`
  flex-direction: row;
`;

const AddMember = styled.TouchableOpacity`
  background-color: #bfb393;
  width: 32px;
  height: 32px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

const MembersContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 28px;
  padding-left: 14px;
`;

const Title = styled.Text`
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #72a8bc;
  margin-bottom: 13px;
`;

const Member = styled.View`
  border-radius: 40px;
  width: 32px;
  height: 32px;
  background-color: grey;
  margin-right: 8px;
`;

export default PrayerMembers;
