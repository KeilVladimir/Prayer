import React from 'react';
import {ScrollView} from 'react-native';
import {Members} from '../../Components/PrayerMembers';
import {PrayerInfo} from '../../Components/PrayerInfo';
import {PrayerComments} from '../../Components/PrayerComments';
import {HeaderInfo} from '../../Components/HeaderInfo';

const PrayerDetails: React.FC = () => {
  return (
    <>
      <HeaderInfo />
      <ScrollView>
        <PrayerInfo />
        <Members />
        <PrayerComments />
      </ScrollView>
    </>
  );
};
export default PrayerDetails;
