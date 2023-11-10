import axios from 'axios';

export async function FazerLogin(dadosAcesso) {
  try {
    const response = await axios.post('/api/autenticacao/auth', dadosAcesso);
    localStorage.setItem('jwt', response.data.token);
    localStorage.setItem('nomeDeUsuario', response.data.usuario.nomeDeUsuario);
    localStorage.setItem('role', response.data.usuario.role);
    return response;

  } catch (error) {
    if(error.response.status == 404) {
      return(error.response.data);

    } else if(error.response.status == 400) {
        const validationErrors = error.response.data;
    
        const hasMoreThanTwoValues = Object.values(validationErrors).length > 1;
    
        if (hasMoreThanTwoValues) {
          return validationErrors;
        } else {
          return validationErrors.email
            ?? validationErrors.senha 
            ?? error.response.data;
        }
      }
    }
  }