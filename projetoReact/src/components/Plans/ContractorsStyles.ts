import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const InputSearch = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  min-width: 25rem;
  border-radius: 1.5rem;
  outline-color: #d1d5db; /* Equivalente a 'outline-gray-200' */
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TableContainer = styled.div`
  border-radius: 1rem; /* Equivalente a 'rounded-xl' */
  background-color: #2d6a4f; /* Equivalente a 'bg-green-800' */
  padding-top: 0.5rem; /* Equivalente a 'pt-2' */
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 1rem; /* Equivalente a 'rounded-xl' */
  background-color: #ffffff; /* Equivalente a 'bg-white' */
`;
