// src/components/TableHeadPlans/TableHeadPlans.tsx

import { Thead, Tr, Th } from './TableHeadPlansStyles';

export function TableHeadPlans() {
  return (
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Valor</Th>
        <Th>Preço Promocional</Th>
        <Th>Situações</Th>
        <Th>Ações</Th>
      </Tr>
    </Thead>
  );
}
