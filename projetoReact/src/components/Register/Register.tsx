// Register.tsx
import {
    Container,
    Header,
    TitleContainer,
    TableContainer,
    Table,
    Thead,
    Th,
    Tbody,
    Td
  } from './RegisterStyles';
  
  export function Register() {
    return (
      <Container>
        <Header>
          <TitleContainer>
            <span>Usuários Cadastrados |</span>
            <span>Todos</span>
          </TitleContainer>
        </Header>
  
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <Th>Usuário</Th>
                <Th>E-mail</Th>
                <Th>WhatsApp</Th>
                <Th>Especialidade</Th>
                <Th>Cidade</Th>
                <Th>Estado</Th>
                <Th>Tipo de usuário</Th>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <Td>Conteúdo da Coluna 1</Td>
                <Td>Conteúdo da Coluna 2</Td>
                <Td>Conteúdo da Coluna 3</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
              </tr>
              <tr>
                <Td>Conteúdo da Coluna 1</Td>
                <Td>Conteúdo da Coluna 2</Td>
                <Td>Conteúdo da Coluna 3</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
                <Td>Conteúdo da Coluna 4</Td>
              </tr>
              {/* Adicione mais linhas conforme necessário */}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
  