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
// Importe a instância do Axios
import produtosIcon from '../../assets/facial-cleanser.png';
import clientesIcon from '../../assets/users.png';
import { api } from '../../services/api';

export function Tab() {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [clients, setClients] = useState([]); // Estado para armazenar os clientes
  const [activeFilter1, setActiveFilter1] = useState<'alta' | 'baixa' | null>(null);
  const [activeFilter2, setActiveFilter2] = useState<'alta' | 'baixa' | null>(null);

  useEffect(() => {
    // Função para buscar os dados dos produtos da API
    const fetchProducts = async () => {
      try {
        const response = await api.get('http://localhost:3000/products'); // Substitua pelo endpoint correto
        setProducts(response.data); // Armazena os produtos no estado
      } catch (error) {
        console.error('Erro ao buscar os dados dos produtos:', error);
      }
    };

    // Função para buscar os dados dos clientes da API
    const fetchClients = async () => {
      try {
        const response = await api.get('http://localhost:3000/customers'); // Substitua pelo endpoint correto
        setClients(response.data); // Armazena os clientes no estado
      } catch (error) {
        console.error('Erro ao buscar os dados dos clientes:', error);
      }
    };

    fetchProducts();
    fetchClients();
  }, []); // Dependência vazia para executar apenas uma vez ao montar o componente

  const handleFilterClick1 = (filter: 'alta' | 'baixa') => {
    setActiveFilter1(filter);
  };

  const handleFilterClick2 = (filter: 'alta' | 'baixa') => {
    setActiveFilter2(filter);
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
            {products.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.percentual}%</TableCell>
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
            {clients.map((client: any) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.percentual}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </Container>
  );
}
