import React from 'react';
import {View} from 'react-native';
import {Prayer} from '../../Components/Prayer';
import styled from 'styled-components/native';
import AddPrayer from '../../Components/AddPrayer/AddPrayer';
import {ButtonShow} from '../../Components/ButtonShow';

const MyPrayers: React.FC = () => {
  return (
    <MyPrayersContainer>
      <AddPrayer />
      <View>
        <Prayer answered={false} />
        <Prayer answered={false} />
        <Prayer answered={false} />
        <ButtonShow nameBtn={'Show Answered Prayers'} />
      </View>
      <View>
        <Prayer answered={true} />
      </View>
    </MyPrayersContainer>
  );
};

const MyPrayersContainer = styled.View`
  background-color: #ffffff;
  height: 100%;
`;
export default MyPrayers;
