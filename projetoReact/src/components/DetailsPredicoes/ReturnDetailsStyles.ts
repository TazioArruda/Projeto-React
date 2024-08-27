import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 2rem 2rem 2rem 2rem; /* Adiciona espaçamento em todos os lados */
  padding: 1rem 2rem; /* Adiciona distância nas laterais */
`;


export const BackButton = styled.img`
  width: 48px; /* Dobrar o tamanho original */
  height: 48px; /* Dobrar o tamanho original */
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: Sora, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #212121;
  margin: 0; /* Remove a margem padrão do título */
`;
