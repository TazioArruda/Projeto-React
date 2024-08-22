import styled from "styled-components";

// Estiliza o container principal da caixa (Box)
export const BoxContainer = styled.div`
  background-color: #001C98; // Define a cor de fundo como branca
  display: flex; // Define o layout flexível
  flex: 1; // Faz o container ocupar todo o espaço disponível no seu eixo pai
  flex-direction: column; // Organiza os elementos filhos em uma coluna
  border-radius: 1.5rem; // Arredonda as bordas do container com um raio de 1.5rem
  padding: 1.5rem; // Adiciona um preenchimento interno de 1.5rem em todos os lados
`;

// Estiliza o wrapper do título da caixa
export const TitleWrapper = styled.div`
  padding-bottom: 1rem; // Adiciona um preenchimento na parte inferior para dar espaço entre o título e os cartões
`;

// Estiliza o título dentro do wrapper
export const Title = styled.span`
  font-weight: 600; // Define a espessura da fonte como semi-negrito (600)
  color: #ffffffff;
`;

// Estiliza o wrapper dos cartões dentro da caixa
export const CardsWrapper = styled.div`
  display: flex; // Usa o layout flexível para os cartões
  width: 100%; // Faz o wrapper dos cartões ocupar toda a largura disponível
  gap: 2rem; // Define um espaçamento de 2rem entre os cartões
`;
