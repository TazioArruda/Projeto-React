// src/components/Tab/TabStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

export const TableHeader = styled.thead`
  background-color: #34d399; /* Ajuste a cor conforme necessário */
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const TableBody = styled.tbody`
  background-color: white;
  border-top: 1px solid #e5e7eb; /* Divide linhas */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb; /* Cor alternada de linha */
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  white-space: nowrap;
`;
