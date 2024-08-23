import styled from 'styled-components';

export const Container = styled.div`
  display: flex; // Torna o container um flexbox
  padding: 16px;
  gap: 20px; // Espaçamento entre as colunas
`;

export const Wrapper = styled.div`
  flex: 1; // Faz com que os wrappers ocupem o mesmo espaço
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; // Os elementos internos do Wrapper ficarão em coluna
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C5CFFF; // Cor de fundo dos ícones
  border-radius: 8px;
  width: 50px;
  height: 50px;
  img {
    width: 30px; // Ajuste o tamanho da imagem conforme necessário
    height: 30px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`

  font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

export const TableHeader = styled.thead`
  background-color: #001C98;
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
  border-top: 1px solid #e5e7eb;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  white-space: nowrap;
`;
