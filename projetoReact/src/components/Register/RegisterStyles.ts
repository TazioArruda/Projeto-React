// RegisterStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 1848px;
  height: 450px;
  margin: 1.5rem 6rem;
  padding: 1.50rem 0;
`;

export const Header = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  span:first-child {
    font-family: 'Sora';
    margin-left: 30px;
    font-size: 32px;
    font-weight: bold;
  }
  span:last-child {
    font-family: 'Sora';
    font-size: 32px;
  }
`;

export const TableContainer = styled.div`
  width: 1648px;
  margin: 2rem 6rem;
  padding: 2rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #38a169; /* bg-green-500 */
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Tbody = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  padding: 1rem;
  white-space: nowrap;
`;
