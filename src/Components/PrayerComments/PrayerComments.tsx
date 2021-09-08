import React, {useEffect} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Comment} from '../Comment';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../../store/ducks/User/selectors';
import {requestGetAllComments} from '../../store/ducks/Comment/actions';
import {getComments} from '../../store/ducks/Comment/selectors';

interface CommentProps {
  id: number;
}

const PrayerComments: React.FC<CommentProps> = ({id}) => {
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(requestGetAllComments());
  }, [token]);

  return (
    <>
      <Title>Comments</Title>
      <View>
        {comments.map(
          com => com.prayerId === id && <Comment {...com} key={com.id} />,
        )}
      </View>
    </>
  );
};

const Title = styled.Text`
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #72a8bc;
  margin-bottom: 13px;
  margin-left: 15px;
`;
export default PrayerComments;
