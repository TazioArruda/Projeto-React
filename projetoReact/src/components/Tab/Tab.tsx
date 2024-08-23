import { useState } from 'react';
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
  IconWrapper, // Novo componente para estilização da imagem
} from './TabStyles';

// Importando as imagens
import produtosIcon from '../../assets/facial-cleanser.png';
import clientesIcon from '../../assets/users.png';

export function Tab() {
  const [activeFilter1, setActiveFilter1] = useState<'alta' | 'baixa' | null>(null);
  const [activeFilter2, setActiveFilter2] = useState<'alta' | 'baixa' | null>(null);

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
            <TableRow>
              <TableCell>Conteúdo da Coluna 1</TableCell>
              <TableCell>Conteúdo da Coluna 2</TableCell>
              <TableCell>Conteúdo da Coluna 3</TableCell>
            </TableRow>
            {/* Adicione mais linhas conforme necessário */}
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
            <TableRow>
              <TableCell>Conteúdo da Coluna 1</TableCell>
              <TableCell>Conteúdo da Coluna 2</TableCell>
              <TableCell>Conteúdo da Coluna 3</TableCell>
            </TableRow>
            {/* Adicione mais linhas conforme necessário */}
          </TableBody>
        </Table>
      </Wrapper>
    </Container>
  );
}
