import axios from 'axios';

export async function fazerLogin(dadosAcesso) {
  try {
    const response = await axios.post('/api/autenticacao/auth', dadosAcesso);

    localStorage.setItem('jwt', response.data.token);
    localStorage.setItem('nomeDeUsuario', response.data.usuario.nomeDeUsuario);
    localStorage.setItem('email', response.data.usuario.email);
    localStorage.setItem('role', response.data.usuario.role);

    return response.data;
  } catch (error) {
    alert(error.response.data);
  }
}