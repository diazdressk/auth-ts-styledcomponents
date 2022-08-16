import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    return navigate('/login');
  };

  useEffect(() => {
    if (!localStorage.getItem('status')) {
      navigate('/login');
    }
  }, []);

  return (
    <Container>
      <Text>
        Здарова, <b>steve.jobs@example.com</b>!
      </Text>
      <Button onClick={logout}>Выйти</Button>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 20px;
  border: none;
  padding: 19px 71px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  background: #f5f5f5;
  box-shadow: #595e6357 0px 8px 24px;
`;
