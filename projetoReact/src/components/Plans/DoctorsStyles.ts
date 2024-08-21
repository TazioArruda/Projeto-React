import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SearchContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-width: 25rem;
  border-radius: 2rem;
  outline-color: #e5e7eb; /* Equivalente a 'outline-gray-200' */
`;

export const FilterDiv = styled.div`
  /* Estilos específicos para o filtro, se necessário */
`;

export const TableContainer = styled.div`
  border-radius: 1rem; /* Equivalente a 'rounded-xl' */
  background-color: #2f855a; /* Equivalente a 'bg-green-800' */
  padding-top: 0.5rem; /* Equivalente a 'pt-2' */
`;

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 1rem; /* Equivalente a 'rounded-xl' */
  background-color: white;
`;
