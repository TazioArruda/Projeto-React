
import { ButtonNew } from "../Button/ButtonNew";

import {
  Container,
  SearchContainer,
  InputContainer,
  SearchInput,
  FilterDiv,
  TableContainer,
  StyledTable,
} from "./DoctorsStyles";
import { TableHeadPlans } from "../TablePlans/TableHeadPlans";
import { TablePlans } from "../TablePlans/TablePlans";

export function Doctors() {
  return (
    <Container>
      <SearchContainer>
        <InputContainer>
          <SearchInput
            type="text"
            id="search"
            name="search"
            placeholder="Pesquise uma palavra-chave"
          />
          <FilterDiv>filter</FilterDiv>
        </InputContainer>

        <ButtonNew name={"Novo Perfil"} />
      </SearchContainer>

      <TableContainer>
        <StyledTable>
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
        </StyledTable>
      </TableContainer>
    </Container>
  );
}
