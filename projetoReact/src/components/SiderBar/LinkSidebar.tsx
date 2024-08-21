import { Button, Icon, LinkContainer, Name, StyledLink } from "./LinkSidebarStyles";


interface linkSidebarProps {
  url: string;
  icon: string;
  name?: string;
  size: number;
  justify?: string;
}

export function LinkSidebar(props: linkSidebarProps) {
  return (
    <LinkContainer>
      <StyledLink to={props.url}>
        <Button justify={props.justify}>
          <Icon src={props.icon} size={props.size} />
          {props.name && <Name>{props.name}</Name>}
        </Button>
      </StyledLink>
    </LinkContainer>
  );
}
