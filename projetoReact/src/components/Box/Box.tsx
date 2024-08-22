import { BoxContainer, TitleWrapper, Title, CardsWrapper } from "./BoxStyles";
import everyUser from "../../assets/every-user.svg"; // Ícone para o caso "Total"
import peopleSearch from "../../assets/people-search-one.svg"; // Ícone para outros casos
import { Card } from "./Card";

// Definindo a interface que descreve as propriedades que o componente Box espera receber.
interface BoxProps {
  boxTitle: string; // Título da caixa
  nameAvailable: string; // Nome da categoria de itens disponíveis
  nameUnAvailable: string; // Nome da categoria de itens indisponíveis
}

// Função Box é um componente que renderiza um container com título e múltiplos cartões.
export function Box(props: BoxProps) {
  // Função que muda o ícone com base no título da caixa
  const changeIcon = () => {
    if (props.boxTitle === "Total") {
      return everyUser; // Retorna ícone "everyUser" se o título for "Total"
    } else {
      return peopleSearch; // Caso contrário, retorna o ícone "peopleSearch"
    }
  };

  return (
    <BoxContainer>
      <TitleWrapper>
        {/* Exibe o título da caixa */}
        <Title>{props.boxTitle}</Title>
      </TitleWrapper>
      <CardsWrapper>
        {/* Renderiza três cartões com diferentes propriedades */}
        <Card 
          icon={changeIcon()} // Define o ícone com base no título
          name="Total Produtos em alta" // Nome fixo para o primeiro cartão
          value="120" // Valor fixo para o primeiro cartão
          color={props.boxTitle === "Médicos" ? "#3B82F6" : "#F59E0B"} // Cor depende do título da caixa
        />
        <Card 
          icon={changeIcon()} // Ícone baseado no título da caixa
          name={props.nameAvailable} // Nome passado via props
          value="900" // Valor fixo
          color="#15803D" // Cor fixa
        />
        <Card 
          icon={changeIcon()} // Ícone baseado no título da caixa
          name={props.nameUnAvailable} // Nome passado via props
          value="100" // Valor fixo
          color="#B91C1C" // Cor fixa
        />

        <Card 
          icon={changeIcon()} // Ícone baseado no título da caixa
          name={props.nameUnAvailable} // Nome passado via props
          value="100" // Valor fixo
          color="#B91C1C" // Cor fixa
        />
      </CardsWrapper>
    </BoxContainer>
  );
}
