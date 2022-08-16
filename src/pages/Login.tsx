import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomInput from '../components/CustomInput';

interface IForm {
  login: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [errorFromServer, setErrorFromServer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    login: Yup.string().required('Без логина не зайти('),
    password: Yup.string()
      .required('А какйой пароль?')
      .min(8, 'Пароль должен быть 8 значным')
      .max(8, 'Пароль должен быть 8 значным'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IForm) => {
    setIsLoading(true);
    await setTimeout(() => {
      if (data.login === 'steve.jobs@example.com' && data.password === 'password') {
        localStorage.setItem('status', JSON.stringify(true));
        setIsLoading(false);
        return navigate('/profile');
      }
      if (data.login !== 'steve.jobs@example.com') {
        setErrorFromServer(`Пользователя ${data.login} не существует`);
        setIsLoading(false);
        return;
      }
      if (data.password !== 'password') {
        setErrorFromServer('Серьёзно, Стив, не помните свой пароль?!');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.getItem('status')) {
      navigate('/profile');
    }
  }, []);

  return (
    <Container>
      {errorFromServer && <ErrorLabel>{errorFromServer}</ErrorLabel>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          register={register}
          value="login"
          label="Логин"
          errors={errors?.login?.message}
          type="text"
        />
        <CustomInput
          register={register}
          value="password"
          label="Пароль"
          errors={errors?.password?.message}
          type="password"
        />
        <CustomCheckbox />
        <Button type="submit" disabled={isLoading}>
          Войти
        </Button>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 640px;
`;

const ErrorLabel = styled.div`
  max-width: 640px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 20px;
  &:before {
    content: url(./icons/error.png);
    margin-right: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  margin-top: 40px;
  border: none;
  border-radius: 8px;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  background: #4a67ff;
  &:disabled {
    background: #99a9ff;
  }
`;
