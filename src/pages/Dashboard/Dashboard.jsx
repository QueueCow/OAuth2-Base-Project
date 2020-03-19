import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectors } from '../../modules/_common/auth/discord';

const Wrapper = styled.div`
  color: white;
  align-items: center;
  min-height: 5rem;
  padding: 8rem 14rem;
  font-size: 2rem;
  opacity: 0.9;
`;

export const Dashboard = () => {
  return <Wrapper>ACCESSTOKEN: {useSelector(selectors.accessToken)}</Wrapper>;
};

export default Dashboard;
