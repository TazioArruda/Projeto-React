// services/loginUser.ts
import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginData) => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      user: email,
      password,
    });

    // Retorna a resposta da API diretamente
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
