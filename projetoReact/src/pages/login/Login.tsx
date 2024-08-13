import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ImageWrapper,
  LoginContainer,
  LoginBox,
  Title,
  InputWrapper,
  InputField,
  Label,
  CheckboxWrapper,
  SubmitButton,
} from './LoginStyles';
import { LoginProps, loginUser } from '../../services/loginUser';
import { CreateAppContext } from '../../contexts/AppController';

const Login: React.FC = () => {
  const { data, userLoged } = useContext(CreateAppContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleClick = async ({ email, password }: LoginProps) => {
    await loginUser({ email, password });
    userLoged();

    if (data.isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <img src="/mnt/data/Frame 61 (3).png" alt="Promotional" />
      </ImageWrapper>
      <LoginContainer>
        <LoginBox>
          <Title>
            <span>Seja bem vindo!</span>
            <h1>Realize seu login</h1>
          </Title>
          <InputWrapper>
            <form onSubmit={handleSubmit(handleClick)}>
              <InputField
                {...register('email')}
                type="email"
                name="email"
                id="email"
              />
              <Label htmlFor="email">Nome</Label>

              <InputField
                {...register('password')}
                type="password"
                name="password"
                id="password"
              />
              <Label htmlFor="password">Senha</Label>

              <CheckboxWrapper>
                <div>
                  <input type="checkbox" name="reminder" id="reminder" />
                  <label htmlFor="reminder">Lembrar-me</label>
                </div>
                <span>Esqueci minha senha</span>
              </CheckboxWrapper>

              <SubmitButton type="submit">Entrar</SubmitButton>
            </form>
          </InputWrapper>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
};

export default Login;