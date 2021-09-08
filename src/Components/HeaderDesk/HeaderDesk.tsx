import React, {useState} from 'react';
import {PlusIcon} from '../../ui/Icons/Add';
import Settings from '../../ui/Icons/Settings/Settings';
import styled from 'styled-components/native';
import {Header} from '../../types';
import {TouchableOpacity} from 'react-native';
import {ModalColumn} from '../../ui/ModalColumn';

export const HeaderDesk: React.FC<Header> = ({nameHeader}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const setIsOpen = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <HeaderDeskBox>
      <HeaderTextBox>
        <HeaderText>{nameHeader}</HeaderText>
      </HeaderTextBox>
      <HeaderImageBox>
        {nameHeader === 'My desk' ? (
          <TouchableOpacity onPress={setIsOpen}>
            <PlusIcon color={'#72A8BC'} />
          </TouchableOpacity>
        ) : (
          <Settings />
        )}
      </HeaderImageBox>
      {isOpenModal && <ModalColumn setIsOpenModal={setIsOpenModal} />}
    </HeaderDeskBox>
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
