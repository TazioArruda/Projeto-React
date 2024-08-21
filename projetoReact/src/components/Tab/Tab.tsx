// src/components/Tab/Tab.tsx

import {
  Container,
  Header,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from './TabStyles';

export function Tab() {
  return (
    <Container>
      <Header>
        <span>Últimos usuários cadastrados</span>
        <span>Ver tudo</span>
      </Header>

      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Usuário</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>WhatsApp</TableHeaderCell>
            <TableHeaderCell>Tipo de usuário</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Conteúdo da Coluna 1</TableCell>
            <TableCell>Conteúdo da Coluna 2</TableCell>
            <TableCell>Conteúdo da Coluna 3</TableCell>
            <TableCell>Conteúdo da Coluna 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Conteúdo da Coluna 1</TableCell>
            <TableCell>Conteúdo da Coluna 2</TableCell>
            <TableCell>Conteúdo da Coluna 3</TableCell>
            <TableCell>Conteúdo da Coluna 4</TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
        </TableBody>
      </Table>
    </Container>
  );
}
