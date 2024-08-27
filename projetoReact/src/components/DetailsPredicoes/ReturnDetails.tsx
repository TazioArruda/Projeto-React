// ReturnDetails.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/FrameReturn.png'; // Substitua pelo caminho real do ícone de voltar
import { BackButton, Container, Title } from './ReturnDetailsStyles';

const ReturnDetails: React.FC = () => {
  return (
    <Container>
      <Link to="/predicoes"> {/* Substitua "/predicoes" pela rota desejada */}
        <BackButton src={backIcon} alt="Voltar" />
      </Link>
      <Title>Predição</Title>
    </Container>
  );
};

export default ReturnDetails;
