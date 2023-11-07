import axios from 'axios';

export async function cadastrarUsuario(usuario) {
    try {
        console.log(usuario);
        const response = await axios.post('/api/usuario/criarUsuario', usuario);
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
            alert('Erro ao criar usuario: Verifique os dados do usuario novamente.');
        } else if (error.response.status === 404) {
            alert(error.response.data);
        } else if (error.response.status === 422) {
            alert(error.response.data);
        } else {
            alert('Erro ao criar usuario: ' + error.response.data);
        }
    }
}

