import { useState, useEffect } from 'react';
import {
  Container,
  Wrapper,
  Header,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Title,
  ButtonGroup,
  FilterButton,
  IconWrapper,
} from './TabStyles';
import produtosIcon from '../../assets/facial-cleanser.png';
import clientesIcon from '../../assets/users.png';
import { api } from '../../services/api';

export function Tab() {
  const [products, setProducts] = useState<any[]>([]); // Estado para armazenar os produtos
  const [clients, setClients] = useState<any[]>([]); // Estado para armazenar os clientes
  const [activeFilter1, setActiveFilter1] = useState<'alta' | 'baixa' | null>(null);
  const [activeFilter2, setActiveFilter2] = useState<'alta' | 'baixa' | null>(null);

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // Estado para armazenar os produtos filtrados
  const [filteredClients, setFilteredClients] = useState<any[]>([]); // Estado para armazenar os clientes filtrados

  useEffect(() => {
    // Função para buscar os dados dos produtos da API
    const fetchProducts = async () => {
      try {
        const response = await api.get('http://localhost:3000/products'); // Substitua pelo endpoint correto
        setProducts(response.data); // Armazena os produtos no estado
        setFilteredProducts(response.data); // Inicialmente, mostra todos os produtos
      } catch (error) {
        console.error('Erro ao buscar os dados dos produtos:', error);
      }
    };

    // Função para buscar os dados dos clientes da API
    const fetchClients = async () => {
      try {
        const response = await api.get('http://localhost:3000/customers'); // Substitua pelo endpoint correto
        setClients(response.data); // Armazena os clientes no estado
        setFilteredClients(response.data); // Inicialmente, mostra todos os clientes
      } catch (error) {
        console.error('Erro ao buscar os dados dos clientes:', error);
      }
    };

    fetchProducts();
    fetchClients();
  }, []); // Dependência vazia para executar apenas uma vez ao montar o componente

  useEffect(() => {
    // Função para filtrar produtos com base no filtro ativo
    const filterProducts = () => {
      if (activeFilter1 === 'alta') {
        setFilteredProducts(
          products.sort((a, b) => a.percentage - b.percentage ) // Produtos com maior percentual primeiro
        );
      } else if (activeFilter1 === 'baixa') {
        setFilteredProducts(
          products.sort((a, b) => b.percentage - a.percentage) // Produtos com menor percentual primeiro
        );
      } else {
        setFilteredProducts(products); // Mostra todos os produtos
      }
    };

    filterProducts();
  }, [activeFilter1, products]); // Dependências: filtro ativo e produtos

  useEffect(() => {
    // Função para filtrar clientes com base no filtro ativo
    const filterClients = () => {
      if (activeFilter2 === 'alta') {
        setFilteredClients(
          clients.sort((a, b) => a.percentage - b.percentage) // Clientes com maior percentual primeiro
        );
      } else if (activeFilter2 === 'baixa') {
        setFilteredClients(
          clients.sort((a, b) => b.percentage - a.percentage) // Clientes com menor percentual primeiro
        );
      } else {
        setFilteredClients(clients); // Mostra todos os clientes
      }
    };

    filterClients();
  }, [activeFilter2, clients]); // Dependências: filtro ativo e clientes

  const handleFilterClick1 = (filter: 'alta' | 'baixa') => {
    setActiveFilter1(filter);
  };

  const handleFilterClick2 = (filter: 'alta' | 'baixa') => {
    setActiveFilter2(filter);
  };

  // Função para converter valor decimal para percentual inteiro
  const formatPercentage = (decimal: number) => {
    return `${Math.round(decimal * 100)}%`;
  };

  return (
    <Container>
      {/* Primeiro Wrapper */}
      <Wrapper>
        <Header>
          <Title>
            <IconWrapper>
              <img src={produtosIcon} alt="Produtos" />
            </IconWrapper>
            Produtos
          </Title>
          <ButtonGroup>
            <FilterButton
              onClick={() => handleFilterClick1('alta')}
              style={{
                backgroundColor: activeFilter1 === 'alta' ? '#00C247' : '#E0E0E0',
              }}
            >
              Em Alta
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterClick1('baixa')}
              style={{
                backgroundColor: activeFilter1 === 'baixa' ? '#FF3333' : '#E0E0E0',
              }}
            >
              Em Baixa
            </FilterButton>
          </ButtonGroup>
        </Header>
        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Produtos</TableHeaderCell>
              <TableHeaderCell>Percentual</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatPercentage(product.percentage)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>

      {/* Segundo Wrapper */}
      <Wrapper>
        <Header>
          <Title>
            <IconWrapper>
              <img src={clientesIcon} alt="Clientes" />
            </IconWrapper>
            Clientes
          </Title>
          <ButtonGroup>
            <FilterButton
              onClick={() => handleFilterClick2('alta')}
              style={{
                backgroundColor: activeFilter2 === 'alta' ? '#00C247' : '#E0E0E0',
              }}
            >
              Em Alta
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterClick2('baixa')}
              style={{
                backgroundColor: activeFilter2 === 'baixa' ? '#FF3333' : '#E0E0E0',
              }}
            >
              Em Baixa
            </FilterButton>
          </ButtonGroup>
        </Header>
        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Clientes</TableHeaderCell>
              <TableHeaderCell>Percentual</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client: any) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{formatPercentage(client.percentage)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </Container>
  );
}
