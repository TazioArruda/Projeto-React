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
import SearchProducts from '../SarchProd/SearchProducts';


const CardProdutos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('http://localhost:3000/products', {
          params: {
            _page: currentPage,
            _limit: 10, // Limite de 10 itens por página
          },
        });

        console.log('Resposta da API:', response.data);

        const productsData = response.data || [];
        setProducts(productsData);

        // Calcular total de páginas manualmente (200 itens no total / 10 itens por página)
        const totalItems = 200; // Número total de produtos conhecidos
        const pages = Math.ceil(totalItems / 10);
        console.log('Total de páginas calculado:', pages);
        setTotalPages(pages); // Atualiza o total de páginas
      } catch (error) {
        console.error('Erro ao buscar os dados dos produtos:', error);
        setTotalPages(1); // Defina um valor padrão em caso de erro
      }
    };

    fetchProducts();
  }, [currentPage]); // A API é chamada sempre que currentPage muda

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => {
        console.log("Página anterior:", prevPage - 1);
        return prevPage - 1;
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => {
        console.log("Próxima página:", prevPage + 1);
        return prevPage + 1;
      });
    }
  };

  const handleFilter = (query: string) => {
    // Lógica para filtrar produtos com base na query
    console.log('Filtrar produtos com:', query);
    // Aqui você pode atualizar a lógica de filtragem, se necessário
  };

  useEffect(() => {
    console.log('Página atual:', currentPage);
    console.log('Total de páginas:', totalPages);
  }, [currentPage, totalPages]);

  return (
    <CardProdutosContainer>
      <SearchProducts onFilter={handleFilter} />
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
                <TableCell>{(product.percentage * 100).toFixed(2)}%</TableCell>
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
