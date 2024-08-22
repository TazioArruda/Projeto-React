
import { CardContainer, IconWrapper, InfoWrapper, Name, Value } from "./CardStyles";

interface CardProps {
  icon: string;
  name: string;
  value: string;
  color: string;
}

// Função que representa o componente Card
export function Card(props: CardProps) {
  return (
    // Container principal do card
    <CardContainer>
      {/* Wrapper para o ícone com cor personalizada */}
      <IconWrapper color={props.color}>
        <img src={props.icon} alt={`${props.name} icon`} />
      </IconWrapper>
      {/* Wrapper para informações do card */}
      <InfoWrapper>
        <Name>{props.name}</Name> {/* Nome exibido no card */}
        <Value>{props.value}</Value> {/* Valor exibido no card */}
      </InfoWrapper>
    </CardContainer>
  );
}
