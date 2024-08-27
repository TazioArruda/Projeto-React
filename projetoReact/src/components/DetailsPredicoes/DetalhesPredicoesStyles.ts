// DetalhesPredicoesStyles.ts
import styled from 'styled-components';

export const DetalhesContainer = styled.div`
  background-color: #001C98; /* Cor de fundo */
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 0px 25px 0px #A3A3A333;
  margin: 2rem;
  color: white; /* Ajuste a cor do texto conforme necessário para contraste */
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center; /* Alinha os itens verticalmente no centro */
  gap: 2rem; /* Espaço entre o ícone e o texto */
  margin-top: 1rem; /* Espaço acima dos itens de contato */
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Espaço entre o ícone e o texto */
`;

export const Icon = styled.img`
  width: 24px; /* Ajuste conforme necessário */
  height: 24px; /* Ajuste conforme necessário */
`;

export const Text = styled.span`
  font-size: 1rem; /* Ajuste conforme necessário */
  color: white; /* Ajuste a cor do texto conforme necessário */
`;