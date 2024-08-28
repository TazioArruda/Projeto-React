import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: #001C98;
  border-radius: 16px 16px 0px 0px;
  border-collapse: collapse;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background: #001C98;
`;

export const TableHeaderCell = styled.th`
  color: #FFFFFF;
  padding: 0.5rem;
  border: 1px solid #FFFFFF;
`;

export const TableBody = styled.tbody`
  background: #FAFAFA;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #DDDDDD;
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #DDDDDD;
  text-align: center;
`;

export const BaixarIcon = styled.img`
  width: 34px; /* Ajuste o tamanho conforme necessário */
  height: 34px; /* Ajuste o tamanho conforme necessário */
  /* Outros estilos, se necessário */
`;
