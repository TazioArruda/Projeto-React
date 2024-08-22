
import {
  Container,
  Header,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TablesContainer,
} from './TabStyles';

export function Tab() {
  return (
    <Container>
      <Header>
        <span>Últimos usuários cadastrados</span>
        <span>Ver tudo</span>
      </Header>
      <TablesContainer>
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
          <TableRow>
            <TableCell>Conteúdo da Coluna 1</TableCell>
            <TableCell>Conteúdo da Coluna 2</TableCell>
            <TableCell>Conteúdo da Coluna 3</TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
        </TableBody>
      </Table>
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
          <TableRow>
            <TableCell>Conteúdo da Coluna 1</TableCell>
            <TableCell>Conteúdo da Coluna 2</TableCell>
            <TableCell>Conteúdo da Coluna 3</TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
        </TableBody>
      </Table>
      </TablesContainer>
    </Container>

    
    
  );
}
