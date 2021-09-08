import React from 'react';
import {HeaderDesk} from '../../Components/HeaderDesk';
import {PrayerColumns} from '../../Components/PrayerColumn';
import {useSelector} from 'react-redux';
import {getStateLoader as getStateLoaderColumn} from '../../store/ducks/Columns/selectors';
import {getStateLoader} from '../../store/ducks/User/selectors';
import {Loader} from '../../ui/Loader';
import {View} from 'react-native';

const Desk: React.FC = () => {
  const isLoader = useSelector(getStateLoader);
  const isLoaderColumn = useSelector(getStateLoaderColumn);
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <View>
          <HeaderDesk nameHeader={'My desk'} />
          {isLoaderColumn ? <Loader /> : <PrayerColumns />}
        </View>
      )}
    </>
  );
};
export default Desk;
