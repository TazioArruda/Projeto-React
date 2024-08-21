import { Outlet } from "react-router-dom";
import { Container, LinksContainer, PlansWrapper, Title } from "./PredicoesStyles";
import { LinkPlans } from "../../components/Plans/LinkPlans";


const Predicoes = () => {
  return (
    <Container>
      <Title>Predições</Title>
      <PlansWrapper>
        <LinksContainer>
          <LinkPlans url={"/plans/doctors"} title={"Médicos"} count={"3"} />
        </LinksContainer>
        <LinksContainer>
          <LinkPlans url={"/plans/contractors"} title={"Contratantes"} count={"2"} />
        </LinksContainer>
      </PlansWrapper>
      <div className="bg-whit p-6 rounded-b-2xl">
        <Outlet />
      </div>
    </Container>
  );
};

export default Predicoes;
