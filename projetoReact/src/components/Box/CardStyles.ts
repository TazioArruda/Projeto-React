import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #f5f5f5; /* Equivalente a 'bg-zinc-100' */
  border-radius: 1rem; /* Equivalente a 'rounded-2xl' */
  padding: 1.5rem; /* Equivalente a 'p-6' */
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.5rem;
`;

export const IconWrapper = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 0.875rem; /* Equivalente a 'text-sm' */
`;

export const Value = styled.span`
  font-size: 1.5rem; /* Equivalente a 'text-2xl' */
  font-weight: bold;
`;
