import React from 'react';
import {ScrollView} from 'react-native';
import Prayer from '../../Components/Prayer/Prayer';
import styled from 'styled-components/native';
import AddPrayer from '../../Components/AddPrayer/AddPrayer';
import {ButtonShow} from '../../Components/ButtonShow';

export const Subcribes: React.FC = () => {
  return (
    <SubscribesContainer>
      <AddPrayer />
      <ScrollView>
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
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
