// src/components/TableHeadPlans/TableHeadPlansStyles.ts
import styled from 'styled-components';

export const Thead = styled.thead`
  background-color: #064e3b; /* Substitua por bg-green-800 */
  height: 4rem; /* Substitua por h-16 */
  color: #ffffff; /* Substitua por text-white */
  font-size: 1rem; /* Substitua por text-base */
`;

export const Tr = styled.tr`
  border-radius: 0.75rem; /* Substitua por rounded-xl */
  background-color: #0f766e; /* Substitua por bg-green-4 */
  color: #ffffff; /* Substitua por text-white */
`;

export const Th = styled.th`
  border-bottom: 2px solid #ffffff; /* Substitua por border-b-2 */
  font-weight: 400; /* Substitua por font-normal */
  text-align: left; /* Substitua por text-left */
  padding: 2rem; /* Substitua por p-8 */
  
  &:not(:first-child) {
    padding: 1rem 2rem; /* Substitua por p-8 mas sem padding para o primeiro th */
  }
`;
