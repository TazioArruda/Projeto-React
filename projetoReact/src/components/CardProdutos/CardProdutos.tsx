import React, { useState, useEffect } from 'react';
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
import leftArrowIcon from '../../assets/left-arrow.png'; 
import rightArrowIcon from '../../assets/right-arrow1.png';
import { api } from '../../services/api';

const CardProdutos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('http://localhost:3000/products');
        console.log('Resposta da API:', response.data);
  
        const productsData = response.data?.products || []; // Verifica se `response.data.products` existe
        console.log('Dados dos produtos:', productsData);
        setProducts(productsData);
  
        const totalItems = response.data?.totalItems || 0; // Verifica se `totalItems` existe
        console.log('Total de itens:', totalItems);
        const itemsPerPage = 10; // Ajuste conforme o número de itens por página
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (error) {
        console.error('Erro ao buscar os dados dos produtos:', error);
      }
    };
  
    fetchProducts();
  }, [currentPage]);

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
    
          {products.length > 0 ? (
            products.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>Disponível</TableCell>
                <TableCell>{product.percentage}%</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>Nenhum produto encontrado</TableCell>
            </TableRow>
          )}
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
