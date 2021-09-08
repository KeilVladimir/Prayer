import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch, KeyboardAvoidingView} from 'react-redux';
import Swipeout from 'react-native-swipeout';
import {
  requestDeleteComment,
  requestUpdateComment,
} from '../../store/ducks/Comment/actions';
import required from '../../helpers/validate';
import {Field, Form} from 'react-final-form';
import {FormApi} from 'final-form';
import {RefactorInput} from '../../ui/RefactorInput';
import {RefactorButton} from '../../ui/RefactorButton';

interface CommentProps {
  name: string;
  body: string;
  created: string;
  id: number;
}

interface FormProps {
  body: string;
  id: number;
}

const Comment: React.FC<CommentProps> = ({id, created, name, body}) => {
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(requestDeleteComment(id));
  };

  const setIsOpen = () => {
    setIsOpenUpdateForm(!isOpenUpdateForm);
  };

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: deleteComment,
    },
  ];
  const onSubmit = (values: FormProps, form: FormApi<FormProps, FormProps>) => {
    form.reset();
    dispatch(
      requestUpdateComment({
        body: values.body,
        id: values.id,
      }),
    );
    setIsOpenUpdateForm(!isOpenUpdateForm);
  };
  return (
    <>
      {!isOpenUpdateForm ? (
        <Swipeout
          right={swipeoutBtns}
          backgroundColor={'#ffffff'}
          sensitivity={40}>
          <CommentBox onLongPress={setIsOpen}>
            <Avatar />
            <CommentContent>
              <CommentHead>
                <Name>{name}</Name>
                <Date>{created}</Date>
              </CommentHead>
              <Message>{body}</Message>
            </CommentContent>
          </CommentBox>
        </Swipeout>
      ) : (
        <FormBox>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              body: body,
              id: id,
            }}
            render={({handleSubmit}) => (
              <>
                <Field
                  name="body"
                  component={RefactorInput}
                  placeholder="Add a prayer..."
                  validate={required}
                  submit={handleSubmit}
                />
                <ButtonBox>
                  <RefactorButton name={'Update'} onPress={handleSubmit} />
                  <RefactorButton name={'Cancel'} onPress={setIsOpen} />
                </ButtonBox>
              </>
            )}
          />
        </FormBox>
      )}
    </>
  );
};
const CommentBox = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  border-width: 1px;
  border-color: #e5e5e5;
  align-items: center;
  min-height: 74px;
  height: auto;
  padding-left: 15px;
`;
const FormBox = styled.View`
  margin-left: 20px;
  margin-right: 20px;
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
const ButtonBox = styled.View`
  flex-direction: row;
`;
export default Comment;
