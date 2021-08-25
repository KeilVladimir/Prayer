import React from 'react';
import {images} from '../../constains/images';
import styled from 'styled-components/native';

const PrayerInfo: React.FC = () => {
  return (
    <>
      <DetailsContainer>
        <Details>
          <Scale>July 25 2017</Scale>
          <ScaleDescription>Date Added</ScaleDescription>
          <TextDate>Opened for 4 days</TextDate>
        </Details>
        <Details>
          <Scale>123</Scale>
          <ScaleDescription>Times Prayed Total</ScaleDescription>
        </Details>
        <Details>
          <Scale>63</Scale>
          <ScaleDescription>Times Prayed by Me</ScaleDescription>
        </Details>
        <Details>
          <Scale>60</Scale>
          <ScaleDescription>Times Prayed by Others</ScaleDescription>
        </Details>
      </DetailsContainer>
      <DateBox>
        <DateImage source={images.state2} />
        <Date>Last prayed 8 min ago</Date>
      </DateBox>
    </>
  );
};
const Scale = styled.Text`
  font-size: 22px;
  line-height: 26px;
  color: #bfb393;
  padding-bottom: 6px;
`;

const ScaleDescription = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #514d47;
`;

const TextDate = styled.Text`
  color: #72a8bc;
  font-size: 13px;
  line-height: 15px;
  position: absolute;
  left: 15px;
  bottom: 11px;
`;
const DetailsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Details = styled.View`
  border-width: 1px;
  position: relative;
  border-color: #e5e5e5;
  width: 50%;
  padding-left: 15px;
  padding-bottom: 30px;
  padding-top: 27px;
  height: auto;
`;

const DateBox = styled.View`
  flex-direction: row;
  padding-left: 15px;
  margin-top: 15px;
  width: 100%;
  height: auto;
  margin-bottom: 14px;
`;
const DateImage = styled.Image``;

const Date = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  line-height: 20px;
  color: #514d47;
`;
export default PrayerInfo;
