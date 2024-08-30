import { BoxContainer, TitleWrapper, Title, CardsWrapper } from "./BoxStyles";
import { RadialBarDashboard } from "../Box/RadialBarDashboard";
import { Card } from "./Card";

// Definindo a interface que descreve as propriedades que o componente Box espera receber.
interface BoxProps {
  boxTitle: string;
  nameAvailable: string;
  nameUnAvailable: string;
  children?: React.ReactNode;
}

// Função Box é um componente que renderiza um container com título e múltiplos cartões.
export function Box({ boxTitle, children }: BoxProps) {
  // Função que define a cor com base no título da caixa
  const determineColor = () => {
    if (boxTitle === "Total") {
      return "#3B82F6"; // Cor para o primeiro cartão
    } else {
      return "#15803D"; // Cor para outros cartões
    }
  };

  return (
    <BoxContainer>
      <TitleWrapper>
        <Title>{boxTitle}</Title>
      </TitleWrapper>
      <CardsWrapper>
        {/* Renderiza o RadialBarDashboard no lugar dos ícones de imagem */}
        <Card 
          icon={<RadialBarDashboard percentageGraphic={75} />} // Ícone RadialBar
          name="Total Produtos em Alta" // Nome fixo para o primeiro cartão
          value="120" // Valor fixo para o primeiro cartão
          color={determineColor()} // Cor baseada no título
        />
        <Card 
          icon={<RadialBarDashboard percentageGraphic={50} />} // Ícone RadialBar
          name="Total de Produtos em Baixa" // Nome fixo para o segundo cartão
          value="56" // Valor fixo
          color={determineColor()} // Cor baseada no título
        />
        <Card 
          icon={<RadialBarDashboard percentageGraphic={30} />} // Ícone RadialBar
          name="Total de Clientes em Alta" // Nome fixo para o terceiro cartão
          value="501" // Valor fixo
          color={determineColor()} // Cor baseada no título
        />
        <Card 
          icon={<RadialBarDashboard percentageGraphic={20} />} // Ícone RadialBar
          name="Total de Clientes em Baixa" // Nome fixo para o quarto cartão
          value="103" // Valor fixo
          color={determineColor()} // Cor baseada no título
        />
      </CardsWrapper>
      {children}
    </BoxContainer>
  );
}
