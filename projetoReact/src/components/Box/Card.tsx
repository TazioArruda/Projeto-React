import { CardContainer, IconWrapper, InfoWrapper, Name, Value } from "./CardStyles";

interface CardProps {
  icon: React.ReactNode; // Alterado para React.ReactNode
  name: string;
  value: string;
  color: string;
}

// Função que representa o componente Card
export function Card({ icon, name, value, color }: CardProps) {
  return (
    <CardContainer>
      {/* Wrapper para o ícone com cor personalizada */}
      <IconWrapper color={color}>
        {icon} {/* Renderiza o componente React passado como ícone */}
      </IconWrapper>
      {/* Wrapper para informações do card */}
      <InfoWrapper>
        <Name>{name}</Name> {/* Nome exibido no card */}
        <Value>{value}</Value> {/* Valor exibido no card */}
      </InfoWrapper>
    </CardContainer>
  );
}
