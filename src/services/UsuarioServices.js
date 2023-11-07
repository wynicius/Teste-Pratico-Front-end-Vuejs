import axios from 'axios';

export async function cadastrarUsuario(usuario) {
  try {
    console.log(usuario);
    const response = await axios.post('/api/usuario/criarUsuario', usuario);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Erro ao criar usuario: Verifique os dados do usuario novamente.');
    } else {
      throw error;
    }
  }
}

