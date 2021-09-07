import React, {useState} from 'react';
import {Prayer} from '../../Components/Prayer';
import styled from 'styled-components/native';
import AddPrayer from '../../Components/AddPrayer/AddPrayer';
import {ButtonShow} from '../../Components/ButtonShow';
import {useDispatch, useSelector} from 'react-redux';
import {getPrayers} from '../../store/ducks/Prayer/selectors';
import {useEffect} from 'react';
import {requestGetAllPrayer} from '../../store/ducks/Prayer/actions';
import {getToken} from '../../store/ducks/User/selectors';
import {TaskRouteProp} from '../../types';
import {useRoute} from '@react-navigation/native';

const MyPrayers: React.FC = props => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const prayers = useSelector(getPrayers);
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const route = useRoute<TaskRouteProp>();
  useEffect(() => {
    if (prayers.length === 0) {
      dispatch(requestGetAllPrayer());
    }
  }, [token]);
  return (
    <MyPrayersContainer>
      <AddPrayer columnId={route.params.columnId} />
      <ScrollPrayers>
        {prayers.map(
          prayer =>
            route.params.columnId === prayer.columnId &&
            prayer.checked && (
              <Prayer
                id={prayer.id}
                key={prayer.id}
                checked={prayer.checked}
                title={prayer.title}
                description={prayer.description}
              />
            ),
        )}

        {isAnswered ? (
          <ButtonShow
            nameBtn={'Hide answered prayers'}
            onPress={() => setIsAnswered(!isAnswered)}
          />
        ) : (
          <ButtonShow
            nameBtn={'Show Answered Prayers'}
            onPress={() => setIsAnswered(!isAnswered)}
          />
        )}
      </ScrollPrayers>
      {isAnswered && (
        <ScrollPrayers>
          {prayers.map(p => console.log(p.title))}
          {prayers.map(
            prayer =>
              props.route.params.columnId === prayer.columnId &&
              !prayer.checked && (
                <Prayer
                  id={prayer.id}
                  key={prayer.id}
                  checked={prayer.checked}
                  title={prayer.title}
                  description={prayer.description}
                />
              ),
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
