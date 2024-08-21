import { Box } from "../Box/Box";
import { Container, Content } from "./PresentationStyles";

// Componente Presentation, que organiza a apresentação de informações
// sobre médicos e contratantes em uma interface de usuário.
export function Presentation() {
  return (
    // Container principal que envolve todo o conteúdo da Presentation.
    <Container>
      
      {/* Content é o contêiner que organiza os Box verticalmente */}
      <Content>
        {/* Box representa um bloco de informações, neste caso sobre Médicos */}
        <Box
          boxTitle={"Dashboard"} // Título da caixa
          nameAvailable={"Disponiveis"} // Nome para itens disponíveis
          nameUnAvailable={"Indisponiveis"} // Nome para itens indisponíveis
        />
        
      </Content>
    </Container>
  );
}
