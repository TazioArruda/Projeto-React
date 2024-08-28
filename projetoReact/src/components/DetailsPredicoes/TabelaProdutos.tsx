import React from 'react';
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, BaixarIcon } from './TabelaPredicoesStyles';
import baixarIcon from '../../assets/acoes.png'; // Substitua pelo caminho real da imagem

const TabelaProdutos: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Produto</TableHeaderCell>
          <TableHeaderCell>Última Compra</TableHeaderCell>
          <TableHeaderCell>Qtd</TableHeaderCell>
          <TableHeaderCell>Dar Baixa</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Produto Exemplo 1</TableCell>
          <TableCell>01/01/2024</TableCell>
          <TableCell>10</TableCell>
          <TableCell>
            <BaixarIcon src={baixarIcon} alt="Baixar" />
          </TableCell>
        </TableRow>
        {/* Repetir conforme necessário */}
      </TableBody>
    </Table>
  );
};

export default TabelaProdutos;