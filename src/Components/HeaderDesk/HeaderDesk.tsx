import React from 'react';
import {PlusIcon} from '../../ui/Icons/Add';
import Settings from '../../ui/Icons/Settings/Settings';
import styled from 'styled-components/native';
import {HeaderType} from '../../types';
export const HeaderDesk: React.FC<HeaderType> = ({nameHeader}) => {
  return (
    <>
      <HeaderDeskBox>
        <HeaderTextBox>
          <HeaderText>{nameHeader}</HeaderText>
        </HeaderTextBox>
        <HeaderImageBox>
          {nameHeader === 'My desk' ? (
            <PlusIcon color={'#72A8BC'} />
          ) : (
            <Settings />
          )}
        </HeaderImageBox>
      </HeaderDeskBox>
    </>
  );
};

const HeaderDeskBox = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 64px;
`;

const HeaderText = styled.Text`
  color: #514d47;
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
`;
const HeaderTextBox = styled.View``;
const HeaderImageBox = styled.View`
  position: absolute;
  right: 31px;
`;
