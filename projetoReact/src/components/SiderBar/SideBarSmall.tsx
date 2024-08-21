
import Logo from "../../assets/logo1.png";
import img1 from "../../assets/dashboard.png";
import img2 from "../../assets/register-users.png";
import img3 from "../../assets/plans.png";
import { LinkSidebar } from "./LinkSidebar";
import { Container, Content, LinksContainer, LogoContainer } from "./SideBarSmallStyles";

export function SideBarSmall() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={Logo} alt="Logo Small" height={36} width={36} />
        </LogoContainer>
        <LinksContainer>
          <LinkSidebar url="/dashboard" icon={img1} size={20} />
          <LinkSidebar url="/Predições" icon={img2} size={20} />
          <LinkSidebar url="/plans" icon={img3} size={20} />
        </LinksContainer>
      </Content>
    </Container>
  );
}
