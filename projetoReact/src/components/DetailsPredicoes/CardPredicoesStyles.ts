import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Adiciona espaço entre os cards */
  align-items: flex-start; /* Alinha os itens ao topo */
  gap: 20px; /* Ajuste o espaçamento entre os cards */
  width: 100%; /* Ocupa toda a largura do contêiner */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os itens em uma coluna */
  align-items: flex-start; /* Alinha os itens ao início do container */
  box-shadow: 0px 7px 30px 0px #BBC0CD66;
  background: #FFFFFF;
  width: 692px; /* Ajuste a largura conforme necessário */
  height: auto; /* Ajusta a altura automaticamente para acomodar o conteúdo */
  gap: 0px;
  border-radius: 24px;
  opacity: 1; /* Remova a opacidade se não for necessária */
  padding: 1rem 2rem; /* Adiciona padding ao card */
  margin-left: 2rem; /* Aumenta o espaçamento da esquerda */
`;

export const Image = styled.img`
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
  background-color: #EEEEEE;
  padding: 10px; /* Ajuste o padding para aumentar a área de fundo */
  border-radius: 8px;
`;
export const Image1 = styled.img`
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
  background-color: #FFE1E1;
  padding: 10px; /* Ajuste o padding para aumentar a área de fundo */
  border-radius: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  padding-left: 16px; /* Espaçamento entre a imagem e o título */
  margin-top: 1rem; /* Adiciona espaçamento superior para o título */
`;

export const Title = styled.h2`
  font-family: Sora, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #000000;
  margin: 0;
`;
export const Title1 = styled.h2`
  font-family: Sora, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #FF3333;
  margin: 0;
`;

export const ImageTitleWrapper = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  width: 100%;
  gap: 10px; /* Espaçamento entre a imagem e o título */
  padding-bottom: 1rem; /* Espaçamento interno inferior */
`;

