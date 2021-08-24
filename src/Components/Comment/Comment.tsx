import React from 'react';
import styled from 'styled-components/native';

const Comment: React.FC = () => {
  return (
    <CommentBox>
      <Avatar />
      <CommentContent>
        <CommentHead>
          <Name>Anna Barber</Name>
          <Date>2 days ago</Date>
        </CommentHead>
        <Message>Hey, Hey!</Message>
      </CommentContent>
    </CommentBox>
  );
};
const CommentBox = styled.View`
  flex-direction: row;
  width: 100%;
  border-width: 1px;
  border-color: #e5e5e5;
  align-items: center;
  min-height: 74px;
  height: auto;
  padding-left: 15px;
`;
const CommentHead = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Name = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  margin-right: 6px;
`;
const CommentContent = styled.View`
  margin-left: 8px;
`;
const Message = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
const Avatar = styled.View`
  border-radius: 40px;
  background-color: grey;
  width: 40px;
  height: 40px;
`;
const Date = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #9c9c9c;
`;
export default Comment;
