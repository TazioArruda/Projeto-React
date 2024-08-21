import { createContext, useState } from "react";

// Define os tipos para as propriedades do contexto e para os filhos do componente
type AppChildren = {
  children: React.ReactNode;
};

type AppContext = {
  data: DataType;
  userLoged: () => void;
  handleChange: () => void;
};

type DataType = {
  isAuthenticated: boolean;
  value: boolean;
};

// Cria o contexto com um valor inicial vazio
export const CreateAppContext = createContext({} as AppContext);

// Componente que provê o contexto para os filhos
export function AppContext({ children }: AppChildren) {
  // Define o estado inicial com 'isAuthenticated' e 'value' como false
  const [data, setData] = useState<DataType>({
    isAuthenticated: false,
    value: false,
  });

  // Função para verificar se o usuário está autenticado
  function userLoged() {
    const hasToken = () => localStorage.getItem("token_fd");
    // Verifica se existe um token no localStorage e atualiza o estado de 'isAuthenticated'
    if (hasToken !== null) {
      setData({ ...data, isAuthenticated: true });
    } else {
      setData({ ...data, isAuthenticated: false });
    }
  }

  // Função para alternar o valor de 'value' entre true e false
  function handleChange() {
    if (data.value) {
      setData({ ...data, value: false });
    } else {
      setData({ ...data, value: true });
    }
  }

  // Retorna o provedor do contexto com as funções e dados disponíveis para os componentes filhos
  return (
    <CreateAppContext.Provider value={{ data, userLoged, handleChange }}>
      {children}
    </CreateAppContext.Provider>
  );
}
