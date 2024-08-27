import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem; /* Equivalente a 'p-8' */
`;

export const Title = styled.h1`
  font-size: 1.875rem; /* Equivalente a 'text-3xl' */
  font-weight: 600; /* Equivalente a 'font-semibold' */
`;

export const PlansWrapper = styled.div`
  padding: 2rem; /* Equivalente a 'p-8' */
  display: flex;
  flex-wrap: wrap; /* Permite que os cards quebrem a linha */
  gap: 1rem; /* Espaçamento entre os cards */
  max-height: 400px; /* Defina um limite de altura apropriado */
  overflow-y: auto; /* Adiciona a barra de rolagem vertical */
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem; /* Equivalente a 'gap-4' */
`;

export const ContentContainer = styled.div`
  background-color: #fff; /* Equivalente a 'bg-white' */
  padding: 1.5rem; /* Equivalente a 'p-6' */
  border-radius: 1.5rem; /* Equivalente a 'rounded-b-2xl' */
`;
