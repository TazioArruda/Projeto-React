import styled from "styled-components";

// Estilo para o container principal do card
export const CardContainer = styled.div`
  background-color: #02156A; /* Cor de fundo do card */
  border-radius: 1rem; /* Arredondamento das bordas do card */
  padding: 1.5rem; /* Espaçamento interno do card */
  display: flex; /* Usa flexbox para o layout do conteúdo */
  flex: 1; /* O card ocupa todo o espaço disponível */
  align-items: center; /* Alinha os itens verticalmente no centro */
  gap: 0.5rem; /* Espaçamento entre o ícone e as informações */
`;

// Estilo para o wrapper do ícone, com cor personalizada
export const IconWrapper = styled.div<{ color: string }>`
  background-color: ${(props) => props.color}; /* Cor de fundo do ícone, definida pelo prop 'color' */
  padding: 1rem; /* Espaçamento interno ao redor do ícone */
  border-radius: 50%; /* Forma circular para o wrapper do ícone */
`;

// Estilo para o wrapper das informações do card
export const InfoWrapper = styled.div`
  display: flex; /* Usa flexbox para organizar as informações */
  flex-direction: column; /* Organiza as informações em uma coluna */
`;

// Estilo para o nome exibido no card
export const Name = styled.span`
  font-size: 0.875rem; /* Tamanho da fonte para o nome */
  color: #ffffffff;
`;

// Estilo para o valor exibido no card
export const Value = styled.span`
  font-size: 1.5rem; /* Tamanho da fonte para o valor */
  font-weight: bold; /* Deixa o valor em negrito */
  color: #ffffffff;
`;
