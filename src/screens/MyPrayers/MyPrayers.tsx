import React, {useState} from 'react';
import {Prayer} from '../../Components/Prayer';
import styled from 'styled-components/native';
import AddPrayer from '../../Components/AddPrayer/AddPrayer';
import {ButtonShow} from '../../Components/ButtonShow';
import {useSelector} from 'react-redux';
import {getPrayers} from '../../store/ducks/Prayer/selectors';
import {TaskRouteProp} from '../../types';
import {useRoute} from '@react-navigation/native';

const MyPrayers: React.FC = () => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const prayers = useSelector(getPrayers);

  const route = useRoute<TaskRouteProp>();

  return (
    <MyPrayersContainer>
      <AddPrayer columnId={route.params.columnId} />
      <ScrollPrayers>
        {prayers.map(
          prayer =>
            route.params.columnId === prayer.columnId &&
            prayer.checked && <Prayer key={prayer.id} {...prayer} />,
        )}

        <ButtonShow
          nameBtn={
            isAnswered ? 'Hide answered prayers' : 'Show Answered Prayers'
          }
          onPress={() => setIsAnswered(!isAnswered)}
        />
      </ScrollPrayers>
      {isAnswered && (
        <ScrollPrayers>
          {prayers.map(
            prayer =>
              route.params.columnId === prayer.columnId &&
              !prayer.checked && <Prayer key={prayer.id} {...prayer} />,
          )}
        </ScrollPrayers>
      )}
    </MyPrayersContainer>
  );
};

const MyPrayersContainer = styled.ScrollView`
  background-color: #ffffff;
  height: auto;
`;

const ScrollPrayers = styled.View`
  height: auto;
`;
export default MyPrayers;
