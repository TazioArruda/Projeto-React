import styled from "styled-components";

export const Container = styled.div`
  width: 18rem; /* 72 Tailwind equivalência */
  height: 100%;
  background-color: #001C98;
  ; /* Equivalente a 'bg-green-800' */
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
