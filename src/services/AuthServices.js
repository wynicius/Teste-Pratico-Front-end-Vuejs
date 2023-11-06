import axios from 'axios';

export async function fazerLogin(dadosAcesso) {
  const response = await axios.post('/api/autenticacao/auth', dadosAcesso);

  // Armazene o token JWT e as informações do usuário no local storage
  localStorage.setItem('jwt', response.data.token);
  localStorage.setItem('nomeDeUsuario', response.data.usuario.nomeDeUsuario);
  localStorage.setItem('email', response.data.usuario.email);

  return response.data;
}