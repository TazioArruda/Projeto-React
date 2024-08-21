import styled from 'styled-components';

// Define o contêiner principal que envolve todo o conteúdo do componente Presentation.
// Ele usa flexbox para alinhar seus itens e tem um fundo vermelho, com preenchimento
// de 32px ao redor e um espaço (gap) de 24px entre os elementos filhos.
export const Container = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  padding: 32px;
  gap: 24px;
`;

// Define o contêiner para o conteúdo interno da Presentation.
// Ele usa flexbox para alinhar os itens na vertical (coluna) e permite que
// este conteúdo se expanda para preencher o espaço disponível (flex: 1).
// Também tem um espaço (gap) de 16px entre os elementos filhos.
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;