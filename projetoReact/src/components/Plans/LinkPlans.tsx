import { CountContainer, StyledLink } from "./LinkPransStyles";




interface LinkPlansProps {
  url: string;
  title: string;
  count: string;
}

export function LinkPlans(props: LinkPlansProps) {
  return (
    <StyledLink to={props.url}>
      {props.title}
      <CountContainer>{props.count}</CountContainer>
    </StyledLink>
  );
}
