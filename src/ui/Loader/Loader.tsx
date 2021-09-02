import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Loader: React.FC = () => (
  <LoaderBox>
    <ActivityIndicator size="large" color="#BFB393" />
  </LoaderBox>
);

const LoaderBox = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export default Loader;
