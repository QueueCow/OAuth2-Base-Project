import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../../files/images/logo.png';

const Text = styled.span`
  color: white;
  position: relative;
  top: 2.5px;
  left: 5px;
`;

const Layout = styled.div`
  display: flex;
`;

const Logo = () => {
  return (
    <Layout data-test='logoComponent'>
      <Avatar src={logo} data-test='logoIMG' /> <Text>YourWebApp</Text>
    </Layout>
  );
};

export default Logo;
