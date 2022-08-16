/* Хотели просто посмотреть- Смогут ли сделать кастомный чекбокс? либо я не понял её назначения, она у меня ничего не делает.*/
import React from 'react';
import styled from 'styled-components';

const CustomCheckbox = () => {
  return (
    <Label>
      <Input type="checkbox" />
      <Span>Запомнить пароль</Span>
    </Label>
  );
};

export default CustomCheckbox;

const Input = styled.input`
  display: none;
`;

const Span = styled.span`
  position: relative;
  margin-left: 33px;
  ::before {
    content: '';
    position: absolute;
    left: -33px;
    top: -3px;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    outline: 1px solid black;
  }
`;

const Label = styled.label`
  user-select: none;
  cursor: pointer;
  Input:checked + Span::before {
    background-color: #4a67ff;
    border: 3px solid white;
    width: 14px;
    height: 14px;
    transition: 0.4s ease-out;
  }
`;
