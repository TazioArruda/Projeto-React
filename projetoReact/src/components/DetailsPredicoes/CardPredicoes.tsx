import React from 'react';
import historicalImage from '../../assets/time.png'; // Substitua pelo caminho real da imagem
import esgotadoImage from '../../assets/Vector.png'
import { CardContainer, Image, Title, TitleWrapper, ImageTitleWrapper, Image1, Title1, FlexContainer } from './CardPredicoesStyles';
import TabelaPredicoes from './TabelaPredicoes'; // Ajuste o caminho conforme necessário
import TabelaProdutos from './TabelaProdutos';

const CardPredicoes: React.FC = () => {
  return (
       <FlexContainer>
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
      <CardContainer>
        <ImageTitleWrapper>
          <Image1 src={esgotadoImage} alt="Produtos esgotados" />
          <TitleWrapper>
            <Title1>Produtos esgotados</Title1>
          </TitleWrapper>
        </ImageTitleWrapper>
        {/* Insira a TabelaProdutos aqui */}
        <TabelaProdutos />
      </CardContainer>
    </FlexContainer>
    
    
  );
};

export default CardPredicoes;

