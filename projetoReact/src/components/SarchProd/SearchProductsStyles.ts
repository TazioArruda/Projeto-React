import styled from 'styled-components';
import searchIcon from '../../assets/search.png'; // Assumindo que o ícone da lupa esteja em 'assets'

export const SearchContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  opacity: 1;
  box-shadow: 0px 0px 12.5px 0px #A3A3A333;
  background-color: white;
  position: relative; /* Garantir que o ícone seja posicionado em relação ao container */
`;

export const Input = styled.input`
  width: 390px;
  height: 50px;
  font-family: Poppins;
  border: 1.5px solid #E0E0E0;
  border-radius: 16px;
  font-size: 1.5rem;
  margin: 8px 20px;
  padding-left: 20px; /* Espaçamento para o texto dentro do input */
  padding-right: 50px; /* Espaçamento para o ícone dentro do input */
  box-sizing: border-box; /* Garantir que padding não aumente o tamanho do input */ /* Garantir que o input fique acima de outros elementos */
  position: relative; /* Garantir que o ícone fique dentro do input */
`;

export const IconWrapper = styled.div`
  position: absolute; /* Posicionamento absoluto dentro do container */
  right: 600px;
  top: 50%;
  transform: translateY(-50%); /* Centralizar verticalmente */
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none; /* Garantir que o ícone não interfira na interação com o input */
  z-index: 1;
`;