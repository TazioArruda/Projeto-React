import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainer = styled.div`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button<{ justify?: string }>`
  display: flex;
  width: 100%;
  background-color: #001C98; /* Equivalente a 'bg-green-800' */
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 0.25rem;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #7682C1; /* Equivalente a 'hover:bg-green-300' */
    color: #22543d; /* Equivalente a 'hover:text-green-800' */
  }
`;

export const Icon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const Name = styled.span`
  /* Se o nome for passado, aplica o estilo */
`;
