import React from 'react';
import {HeaderDesk} from '../../Components/HeaderDesk';
import {Column} from '../../Components/Column';
import styled from 'styled-components/native';
const Desk: React.FC<any> = () => {
  return (
    <>
      <HeaderDesk nameHeader={'My desk'} />
      <ColumnsBox>
        <Column name={'To do'} />
        <Column name={'In Progress'} />
        <Column name={'To do'} />
        <Column name={'To do'} />
        <Column name={'To do'} />
      </ColumnsBox>
    </>
  );
};

const ColumnsBox = styled.View`
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  padding-top: 15px;
`;

export default Desk;
