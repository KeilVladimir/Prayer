import React from 'react';
import {ScrollView} from 'react-native';
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

const PrayerDetails: React.FC = () => {
  const route = useRoute<DetailRouteProp>();
  const isLoader = useSelector(getLoader);
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <HeaderInfo />
          <ScrollView>
            <PrayerInfo />
            <Members />
            <PrayerComments id={route.params.id} />
          </ScrollView>
          <CommentForm id={route.params.id} />
        </>
      )}
    </>
  );
};
export default PrayerDetails;
