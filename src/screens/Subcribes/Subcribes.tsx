import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {ButtonShow} from '../../Components/ButtonShow';

export const Subcribes: React.FC = () => {
  return (
    <SubscribesContainer>
      <ScrollView>
        <ButtonShow nameBtn={'hide Answered Prayers'} />
      </ScrollView>
    </SubscribesContainer>
  );
};

const SubscribesContainer = styled.View`
  background-color: #ffffff;
  height: 100%;
`;
export default Subcribes;
