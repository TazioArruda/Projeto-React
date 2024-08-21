import React from "react";
import { TableRow, TableCell, TableCellDefault } from "./TablePlansStyles";

interface TablePlansProps {
  type: string;
  value: string;
  promotion: string;
  situation: React.ReactNode;
  actions: React.ReactNode;
}

export function TablePlans(props: TablePlansProps) {
  return (
    <TableRow>
      <TableCell>{props.type}</TableCell>
      <TableCellDefault>{props.value}</TableCellDefault>
      <TableCellDefault>{props.promotion}</TableCellDefault>
      <TableCellDefault>{props.situation}</TableCellDefault>
      <TableCellDefault>{props.actions}</TableCellDefault>
    </TableRow>
  );
}
