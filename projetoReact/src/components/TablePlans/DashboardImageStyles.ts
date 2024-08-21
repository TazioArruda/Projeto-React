// src/components/DashboardImage/DashboardImageStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #065f46; /* bg-green-900 */
  position: relative;
  min-width: 26rem; /* min-w-[26rem] */
  height: 27rem; /* h-[27rem] */
  border-radius: 1.5rem; /* rounded-2xl */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 15rem; /* w-60 */
  right: 0;
  margin: 1rem; /* m-4 */
`;

export const Content = styled.div`
  padding: 2rem 2rem 0; /* p-8 pt-56 */
  width: 18rem; /* w-72 */
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #a7f3d0; /* bg-green-300 */
  padding: 0.25rem; /* p-1 */
  gap: 1rem; /* gap-4 */
`;

export const DateText = styled.span`
  color: #ffffff; /* text-white */
`;

export const Heading = styled.h3`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600; /* font-semibold */
  color: #ffffff; /* text-white */
`;

export const Paragraph = styled.p`
  width: 20rem; /* w-80 */
  color: #ffffff; /* text-white */
`;
