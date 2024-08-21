
import { CardContainer, IconWrapper, InfoWrapper, Name, Value } from "./CardStyles";

interface CardProps {
  icon: string;
  name: string;
  value: string;
  color: string;
}

export function Card(props: CardProps) {
  return (
    <CardContainer>
      <IconWrapper color={props.color}>
        <img src={props.icon} alt={`${props.name} icon`} />
      </IconWrapper>
      <InfoWrapper>
        <Name>{props.name}</Name>
        <Value>{props.value}</Value>
      </InfoWrapper>
    </CardContainer>
  );
}
