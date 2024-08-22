
import { Container, Content, LogoContainer, LinksContainer } from "./SideBarFullStyles";

import Img from "../../assets/logo.png";
import img1 from "../../assets/dashboard.png";
import img2 from "../../assets/chart-line.png";
import img3 from "../../assets/facial-cleanser.png";
import { LinkSidebar } from "./LinkSidebar";

export function SideBarFull() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={Img} alt="Logo" />
        </LogoContainer>
        <LinksContainer>
          <LinkSidebar url="/dashboard" icon={img1} name="Dashboard" size={20} justify="justify-start" />
          <LinkSidebar url="/predicoes" icon={img2} name="Predições" size={20} justify="justify-start" />
          <LinkSidebar url="/produtos" icon={img3} name="Produtos" size={20} justify="justify-start" />
        </LinksContainer>
      </Content>
    </Container>
  );
}
