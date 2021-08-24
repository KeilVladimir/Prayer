import React, {useState} from 'react';
import styled from 'styled-components/native';
import CheckIcon from '../Icons/Check/Checkbox';
const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleState = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckContainer onPress={toggleState}>
      {isChecked && <CheckIcon />}
    </CheckContainer>
  );
};
const CheckContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-style: solid;
  border-color: #514d47;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export default CheckBox;
