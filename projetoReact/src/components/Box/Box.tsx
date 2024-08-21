
import { BoxContainer, TitleWrapper, Title, CardsWrapper } from "./BoxStyles";
import everyUser from "../../assets/every-user.svg";
import peopleSearch from "../../assets/people-search-one.svg";
import { Card } from "./Card";


interface BoxProps {
  boxTitle: string;
  nameAvailable: string;
  nameUnAvailable: string;
}

export function Box(props: BoxProps) {
  const changeIcon = () => {
    if (props.boxTitle === "Total") {
      return everyUser;
    } else {
      return peopleSearch;
    }
  };

  return (
    <BoxContainer>
      <TitleWrapper>
        <Title>{props.boxTitle}</Title>
      </TitleWrapper>
      <CardsWrapper>
        <Card icon={changeIcon()} name="Total Produtos em alta" value="120" color={props.boxTitle === "Médicos" ? "#3B82F6" : "#F59E0B"} />
        <Card icon={changeIcon()} name={props.nameAvailable} value="900" color="#15803D" />
        <Card icon={changeIcon()} name={props.nameUnAvailable} value="100" color="#B91C1C" />
      </CardsWrapper>
    </BoxContainer>
  );
}
