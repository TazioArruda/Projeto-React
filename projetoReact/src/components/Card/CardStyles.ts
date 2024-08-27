import styled from 'styled-components';
import arrowIcon from '../../assets/right.png'; // Assumindo que o ícone de seta esteja em 'assets'

export const MainCard = styled.div`
  width: 317px;
  height: 266px;
  border-radius: 24px;
  opacity: 0.9;
  background-color: white;
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 0px 25px 0px #A3A3A333; /* Adicionado sombreamento */
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center; /* Alinha itens verticalmente no centro */
  gap: 16px; /* Espaço entre o ícone e o texto */
`;

export const InfoIcon = styled.img`
  width: 48px;
  height: 48px;
  background-color: #C5CFFF;
  border-radius: 50%; /* Faz a imagem ficar redonda */
  padding: 8px; /* Adiciona espaço entre a borda e a imagem */
  box-sizing: border-box;
`;

export const TitleAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: -10px; /* Espaço entre o título e a mensagem de status */
`;

export const Title = styled.h2`
  font-size: 1.5rem; /* Ajuste conforme necessário */
  margin: 0; /* Remove a margem padrão do título */
`;

export const StatusMessage = styled.p`
  font-size: 1rem;
  color: #00C247;
  margin-top: 1px;

  ;
`;

export const ArrowIconWrapper = styled.div`
  margin-left: auto;
`;

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const SubCard = styled.div`
  width: 259px;
  height: 146px;
  border-radius: 16px;
  opacity: 0.5;
  background-color: #EEEEEE;
  position: absolute;
  top: 96px;
  left: 24px;
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
`;

export const TableHeader = styled.th`
  border: none;
  padding: 8px;
  color: #796CE0;
  ;
`;

export const TableCell = styled.td`
  border: none;
  padding: 8px;
  color: #424242;
  font-family: Poppins, sans-serif; /* Fonte Poppins */
  font-size: 14px; /* Tamanho da fonte */
  font-weight: 400; /* Peso da fonte */
  line-height: 19.6px; /* Altura da linha */
  letter-spacing: 0.2px; /* Espaçamento entre letras */
  background-color: transparent; /* Remove qualquer fundo padrão */
`;