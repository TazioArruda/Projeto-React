import styled from 'styled-components';
import Image from '../../assets/imageLogin.jpeg';


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  flex: 1; /* Ocupa o lado esquerdo da tela */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 662px; /* Define a largura fixa da imagem */
  height: 100vh; /* Faz com que a imagem ocupe toda a altura da tela */
  background-image: url(${Image}); /* Define a imagem de fundo */
  background-size: cover; /* Cobre todo o espaço disponível */
  background-position: center; /* Centraliza a imagem */
`;

export const LoginBox = styled.div`
  width: 25rem;
  max-width: 90%;
  height: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  border-radius: 1rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  justify-content: flex-start;

  span {
    font-size: 1.25rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1rem 0.75rem;
  font-size: 0.875rem;
  color: #1f2937;
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: #38a169;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -0.75rem;
    left: 0.75rem;
    font-size: 0.75rem;
    color: #38a169;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0.75rem;
  top: 1rem;
  padding: 0 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
  background-color: #ffffff;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 0;
  transform-origin: left;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color:#001C98;
  background-color: #c6f6d5;
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #001C98;
    color: #e6fffa;
  }
`;
