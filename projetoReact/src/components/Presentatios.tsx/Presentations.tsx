
import { Box } from "../Box/Box";
import { Container, Content } from "./PresentationStyles";

// Componente Presentation que organiza a apresentação das informações.
export function Presentation() {
  return (
    <Container>
      <Content>
        {/* Exemplo de uso do Box */}
        <Box 
          boxTitle="Total" 
          nameAvailable="Produtos Disponíveis" 
          nameUnAvailable="Produtos Indisponíveis" 
        >
          {/* Passando a porcentagem para o RadialBarDashboard */}
        </Box>
      </Content>
    </Container>
  );
}
