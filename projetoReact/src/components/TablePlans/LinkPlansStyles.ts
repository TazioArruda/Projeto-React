import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    padding: 1rem; /* Equivalente a 'p-4' */
    background-color: #e5e7eb; /* Equivalente a 'bg-gray-200' */
    gap: 1.25rem; /* Equivalente a 'gap-5' */
    font-size: 1.25rem; /* Equivalente a 'text-xl' */
    display: flex;
    align-items: center;
    border-radius: 1rem 1rem 0 0; /* Equivalente a 'rounded-t-2xl' */
`;

export const CountBadge = styled.div`
    background-color: #68d391; /* Equivalente a 'bg-green-400' */
    border-radius: 50%;
    width: 2rem; /* Equivalente a 'w-8' */
    height: 2rem; /* Equivalente a 'h-8' */
    display: flex;
    justify-content: center;
    align-items: center;
`;
