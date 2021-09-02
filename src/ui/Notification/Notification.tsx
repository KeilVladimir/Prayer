import React from 'react';
import styled from 'styled-components/native';

const Notification: React.FC = () => {
  return (
    <NotificationStyled>
      <TextNotification>3</TextNotification>
    </NotificationStyled>
  );
};
const NotificationStyled = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 20px;
  background-color: #ac5253;
  margin-top: 16px;
  margin-right: 46px;
  align-items: center;
  justify-content: center;
`;
const TextNotification = styled.Text`
  color: #ffffff;
  font-size: 9px;
  line-height: 11px;
`;
export default Notification;
