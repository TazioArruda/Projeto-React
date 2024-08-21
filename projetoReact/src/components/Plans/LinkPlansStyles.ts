import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 1rem;
  background-color: #e5e7eb; /* Equivalente a 'bg-gray-200' */
  gap: 1.25rem; /* Equivalente a 'gap-5' */
  font-size: 1.25rem; /* Equivalente a 'text-xl' */
  display: flex;
  align-items: center;
  border-radius: 1.5rem 1.5rem 0 0; /* Equivalente a 'rounded-t-2xl' */
`;

export const CountContainer = styled.div`
  background-color: #68d391; /* Equivalente a 'bg-green-400' */
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
