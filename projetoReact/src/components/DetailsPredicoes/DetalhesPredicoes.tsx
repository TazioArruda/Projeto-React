import React, { useState, useEffect } from "react";
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
import { api } from "../../services/api";

interface ClientDetails {
  name: string;
  phone: string;
  email: string;
}

const DetalhesPredicoes: React.FC = () => {
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  const clientId = 1; // Substitua pelo ID do cliente selecionado, que pode vir de uma prop ou da URL

  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const response = await api.get(`http://localhost:3000/customers/${clientId}`); // Substitua pelo endpoint correto
        setClientDetails(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do cliente:', error);
      }
    };

    fetchClientDetails();
  }, [clientId]);

  if (!clientDetails) {
    return <div>Carregando...</div>; // Exibe um loading enquanto os dados são carregados
  }

  return (
    <div>
      <ReturnDetails />
      <DetalhesContainer>
        <h2>{clientDetails.name}</h2> {/* Nome do cliente */}
        <ContactInfo>
          <IconWrapper>
            <Icon src={contactIcon} alt="Contato" />
            <Text>Telefone: {clientDetails.phone}</Text> {/* Telefone do cliente */}
          </IconWrapper>
          <IconWrapper>
            <Icon src={emailIcon} alt="Email" />
            <Text>Email: {clientDetails.email}</Text> {/* Email do cliente */}
          </IconWrapper>
        </ContactInfo>
      </DetalhesContainer>
      <CardPredicoes/>
    </div>
  );
};

export default DetalhesPredicoes;

