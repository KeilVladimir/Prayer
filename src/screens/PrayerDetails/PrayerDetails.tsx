import React from 'react';
import {ScrollView, View} from 'react-native';
import {Members} from '../../Components/PrayerMembers';
import {PrayerInfo} from '../../Components/PrayerInfo';
import {PrayerComments} from '../../Components/PrayerComments';
import {HeaderInfo} from '../../Components/HeaderInfo';
import {useRoute} from '@react-navigation/native';
import {DetailRouteProp} from '../../types';
import {useSelector} from 'react-redux';
import {getLoader} from '../../store/ducks/Comment/selectors';
import {Loader} from '../../ui/Loader';
import {CommentForm} from '../../Components/CommentForm';
import styled from 'styled-components/native';
const PrayerDetails: React.FC = () => {
  const route = useRoute<DetailRouteProp>();
  const isLoader = useSelector(getLoader);
  return (
    <View>
      {isLoader ? (
        <Loader />
      ) : (
        <Info>
          <HeaderInfo />
          <ScrollBox>
            <PrayerInfo />
            <Members />
            <PrayerComments id={route.params.id} />
          </ScrollBox>
          <CommentForm id={route.params.id} />
        </Info>
      )}
    </View>
  );
};

const ScrollBox = styled.ScrollView`
  position: relative;
`;

const Info = styled.View`
  position: relative;
  height: 100%;
  padding-bottom: 45px;
`;
export default PrayerDetails;
