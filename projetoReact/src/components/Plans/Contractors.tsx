import { ButtonNew } from "../Button/ButtonNew";
import { TableHeadPlans } from "../TablePlans/TableHeadPlans";
import { TablePlans } from "../TablePlans/TablePlans";

import {
  Container,
  InputSearch,
  SearchInput,
  FilterContainer,
  TableContainer,
  Table
} from "./ContractorsStyles";

export function Contractors() {
  return (
    <Container>
      <InputSearch>
        <FilterContainer>
          <SearchInput
            type="text"
            id="search"
            name="search"
            placeholder="Pesquise uma palavra-chave"
          />
          <div>filter</div>
        </FilterContainer>
        <ButtonNew name={"Novo Perfil"} />
      </InputSearch>
      
      <TableContainer>
        <Table>
          <TableHeadPlans />
          <TablePlans
            type={"Mensal"}
            value={"100"}
            promotion={"98"}
            situation={"Situações"}
            actions={"ações"}
          />
          <TablePlans
            type={"Trimestral"}
            value={"200"}
            promotion={"198"}
            situation={"Situações"}
            actions={"Ações"}
          />
          <TablePlans
            type={"Semestral"}
            value={"300"}
            promotion={"--"}
            situation={"Situações"}
            actions={"Ações"}
          />
        </Table>
      </TableContainer>
    </Container>
  );
}
