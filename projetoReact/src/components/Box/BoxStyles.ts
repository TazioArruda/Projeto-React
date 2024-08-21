import styled from "styled-components";

export const BoxContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 1.5rem; /* Equivalente a 'rounded-2xl' */
  padding: 1.5rem; /* Equivalente a 'p-6' */
`;

export const TitleWrapper = styled.div`
  padding-bottom: 1rem; /* Equivalente a 'pb-4' */
`;

export const Title = styled.span`
  font-weight: 600; /* Equivalente a 'font-semibold' */
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem; /* Equivalente a 'gap-8' */
`;
