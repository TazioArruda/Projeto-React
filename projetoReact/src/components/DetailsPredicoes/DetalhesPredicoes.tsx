import React from "react";
import {
  DetalhesContainer,
  ContactInfo,
  IconWrapper,
  Icon,
  Text,
} from "./DetalhesPredicoesStyles";
import contactIcon from "../../assets/phone-telephone.png"; // Substitua pelo caminho real do ícone de contato
import emailIcon from "../../assets/mail.png"; // Substitua pelo caminho real do ícone de email
import ReturnDetails from "./ReturnDetails";
import CardPredicoes from "./CardPredicoes";

const DetalhesPredicoes: React.FC = () => {
  return (
    <div>
      <ReturnDetails />
      <DetalhesContainer>
        <h2>Detalhes da Predição</h2>
        <ContactInfo>
          <IconWrapper>
            <Icon src={contactIcon} alt="Contato" />
            <Text>Telefone: (XX) XXXX-XXXX</Text>
          </IconWrapper>
          <IconWrapper>
            <Icon src={emailIcon} alt="Email" />
            <Text>Email: exemplo@dominio.com</Text>
          </IconWrapper>
        </ContactInfo>
      </DetalhesContainer>
      <CardPredicoes/>
    </div>
  );
};

export default DetalhesPredicoes;
