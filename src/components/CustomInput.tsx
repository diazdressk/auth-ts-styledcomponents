import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  errors?: string;
  type: 'text' | 'password';
  register: any;/* ts жаловался на спрединг registra, никак не смог победить, поэтому any(( */
  value: string;
}

interface InputProps {
  errorForStyle?: boolean;
}

function CustomInput({ label, errors, type, register, value }: Props) {
  return (
    <Container>
      <label>{label}</label>
      <Input {...register(value)} type={type} errorForStyle={errors} />
      {errors && <ErrorLabel>{errors}</ErrorLabel>}
    </Container>
  );
}

export default CustomInput;

const Container = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  color: ${({ errorForStyle }) => errorForStyle && '#e26f6f'};
  &:focus {
    outline: 1px solid ${({ errorForStyle }) => errorForStyle && '#e26f6f'};
  }
  font-size: 16px;
`;

const ErrorLabel = styled.p`
  color: #e26f6f;
  margin-top: 8px;
  font-size: 14px;
`;
