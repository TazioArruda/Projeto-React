import React from 'react';
import historicalImage from '../../assets/time.png'; // Substitua pelo caminho real da imagem
import { CardContainer, Image, Title, TitleWrapper, ImageTitleWrapper } from './CardPredicoesStyles';
import TabelaPredicoes from './TabelaPredicoes'; // Ajuste o caminho conforme necessário

const CardPredicoes: React.FC = () => {
  return (
    <CardContainer>
      <ImageTitleWrapper>
        <Image src={historicalImage} alt="Histórico" />
        <TitleWrapper>
          <Title>Histórico</Title>
        </TitleWrapper>
      </ImageTitleWrapper>
      {/* Insira a TabelaPredicoes aqui */}
      <TabelaPredicoes />
    </CardContainer>
    
  );
};

export default CardPredicoes;

