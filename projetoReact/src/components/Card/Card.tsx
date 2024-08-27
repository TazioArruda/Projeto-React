import React from 'react';
import { MainCard, CardTitle, StatusMessage, SubCard, Table, TableHeader, TableCell, InfoIcon, Title, TitleAndStatus, ArrowIconWrapper, ArrowIcon } from './CardStyles';
import infoIcon from '../../assets/user3.png';
import { Link } from 'react-router-dom'; // Importando o Link

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <MainCard>
      <CardTitle>
        <InfoIcon src={infoIcon} alt="Icon" />
        <TitleAndStatus>
          <Title>{title}</Title>
          <StatusMessage> ° Status vai aqui</StatusMessage>
        </TitleAndStatus>
        {/* Transformando o ArrowIcon em um Link */}
        <ArrowIconWrapper>
          <Link to="/outra-pagina">
            <ArrowIcon />
          </Link>
        </ArrowIconWrapper>
      </CardTitle>
      <SubCard>
        <Table>
          <thead>
            <tr>
              <TableHeader>Produto</TableHeader>
              <TableHeader>Próx. compra</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>Linha 1, Col 1</TableCell>
              <TableCell>Linha 1, Col 2</TableCell>
            </tr>
            <tr>
              <TableCell>Linha 2, Col 1</TableCell>
              <TableCell>Linha 2, Col 2</TableCell>
            </tr>
            <tr>
              <TableCell>Linha 3, Col 1</TableCell>
              <TableCell>Linha 3, Col 2</TableCell>
            </tr>
          </tbody>
        </Table>
      </SubCard>
    </MainCard>
  );
};

export default Card;
