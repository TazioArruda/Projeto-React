import { ButtonStyled } from "./ButtonNewStyles";


interface ButtonNewProps {
  name: string;
}

export function ButtonNew(props: ButtonNewProps) {
  return <ButtonStyled>{props.name}</ButtonStyled>;
}
