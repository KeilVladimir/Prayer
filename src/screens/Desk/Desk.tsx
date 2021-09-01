import React from 'react';
import {HeaderDesk} from '../../Components/HeaderDesk';
import PrayerColumn from '../../Components/PrayerColumn/PrayerColumn';
import {useSelector} from 'react-redux';
import {getStateLoader} from '../../store/ducks/User/selectors';
import {getStateLoader as getStateLoaderColumn} from '../../store/ducks/Columns/selectors';
import {Loader} from '../../ui/Loader';

const Desk: React.FC = () => {
  const isLoader = useSelector(getStateLoader);
  const isLoaderColumn = useSelector(getStateLoaderColumn);
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <HeaderDesk nameHeader={'My desk'} />
          {isLoaderColumn ? <Loader /> : <PrayerColumn />}
        </>
      )}
    </>
  );
};
export default Desk;
