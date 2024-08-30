
import { CreateAppContext } from '../../contexts/AppController';
import { loginUser } from '../../services/loginUser';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckboxWrapper, Container, ImageWrapper, InputField, InputWrapper, Label, LoginBox, LoginContainer, SubmitButton, Title, InputContainer } from './LoginStyles';

// Define a tipagem para os valores do formulário
interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { data, userLoged } = useContext(CreateAppContext);
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const handleClick: SubmitHandler<FormValues> = async ({ email, password }) => {
    await loginUser({ email, password });
    userLoged();

    if (data.isAuthenticated) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <LoginContainer>
        <LoginBox>
          <Title>
            <span>Seja bem vindo!</span>
            <h1>Realize seu login</h1>
          </Title>
          <InputWrapper>
            <form onSubmit={handleSubmit(handleClick)}>
              <InputContainer>
                <InputField
                  {...register('email')}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                />
                <Label htmlFor="email">Nome</Label>
              </InputContainer>

              <InputContainer>
                <InputField
                  {...register('password')}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                />
                <Label htmlFor="password">Senha</Label>
              </InputContainer>
             
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
      <ImageWrapper />
    </Container>
  );
};

export default Login;
