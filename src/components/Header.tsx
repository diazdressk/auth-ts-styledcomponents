import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Head>ONLY.</Head>;
};

export default Header;

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 100px 0;
  font-weight: 700;
  font-size: 64px;
`;
