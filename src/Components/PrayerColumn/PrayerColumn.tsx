import React from 'react';

import {Column} from '../Column';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styled from 'styled-components/native';
import {getAllColumns} from '../../store/ducks/Columns/selectors';
import {requestGetAllColumns} from '../../store/ducks/Columns/actions';
import {getToken} from '../../store/ducks/User/selectors';

const PrayerColumns: React.FC = () => {
  const columns = useSelector(getAllColumns);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (columns.length === 0 && token !== '') {
      try {
        dispatch(requestGetAllColumns());
      } catch (e) {
        console.log('error');
      }
    }
  }, [token]);

  if (columns.length) {
    return (
      <ColumnsBox>
        {columns.map(col => (
          <Column key={col.id} name={col.title} id={col.id} />
        ))}
      </ColumnsBox>
    );
  }
  return null;
};
const ColumnsBox = styled.ScrollView`
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  padding-top: 15px;
  margin-bottom: 10px;
`;

export default PrayerColumns;
