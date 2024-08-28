// CardProdutos.tsx
import React, { useState } from 'react';
import {
  CardProdutosContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  PaginationContainer,
  PaginationButton,
  PageNumber,
} from './CardProdutosStyles';
import leftArrowIcon from '../../assets/left-arrow.png'; // Substitua pelo caminho correto do ícone
import rightArrowIcon from '../../assets/right-arrow1.png'; // Substitua pelo caminho correto do ícone

const CardProdutos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10); // Ajuste conforme necessário

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <CardProdutosContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Produtos</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Percentual</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Substitua com os dados reais */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Produto Exemplo</TableCell>
            <TableCell>Disponível</TableCell>
            <TableCell>75%</TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
        </TableBody>
      </Table>

      <PaginationContainer>
        <PaginationButton onClick={handlePreviousPage} disabled={currentPage === 1}>
          <img src={leftArrowIcon} alt="Página Anterior" />
        </PaginationButton>
        <PageNumber>{currentPage} / {totalPages}</PageNumber>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          <img src={rightArrowIcon} alt="Próxima Página" />
        </PaginationButton>
      </PaginationContainer>
    </CardProdutosContainer>
  );
};

export default CardProdutos;
