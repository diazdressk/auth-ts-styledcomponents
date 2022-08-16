import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      Тут ничего нет!
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

