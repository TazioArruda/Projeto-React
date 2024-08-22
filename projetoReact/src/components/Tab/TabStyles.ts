// src/components/Tab/TabStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const TablesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; // Espaçamento entre as tabelas
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  background-color: white;
`;

export const TableHeader = styled.thead`
  background-color: #001C98; /* Ajuste a cor conforme necessário */
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  &:first-child {
    border-radius: 16px 0 0 0;
  }

  &:last-child {
    border-radius: 0 16px 0 0;
  }
`;

export const TableBody = styled.tbody`
  background-color: white;
  border-top: 1px solid #e5e7eb; /* Divide linhas */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb; /* Cor alternada de linha */
  }
  &:first-child td:last-child {
    border-radius: 0 16px 0 0;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  white-space: nowrap;
`;
