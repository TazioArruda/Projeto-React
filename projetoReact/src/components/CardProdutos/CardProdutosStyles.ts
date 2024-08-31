// CardProdutosStyles.ts
import styled from 'styled-components';

export const CardProdutosContainer = styled.div`
  width: 982px;
  height: 503px;  /* Altura fixa para que o overflow funcione */
  border-radius: 24px;
  background: #FFFFFF;
  box-shadow: 0px 0px 25px 0px #A3A3A333;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 auto; /* Centraliza horizontalmente com margens automáticas */
  position: relative; 
  top: 25%; 
  transform: translateY(-50%); 
  gap:20px;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  min-height: 100vh; /* Garante que o contêiner ocupe a altura total da tela */
  padding: 1rem;
`;
export const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const TableHeaderCell = styled.th`
  background-color: #001C98;
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  
`;

export const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 0.5rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PageNumber = styled.span`
  font-size: 1.25rem;
  margin: 0 1rem;
`;
