import axios from 'axios';

export async function getTodosContatos() {
  const response = await axios.get('/api/listartodos');
  return response.data;
}

export async function listarContato(id) {
  const response = await axios.get('/api/listar/' + id);
  return response.data;
}

export async function criarContato(contato) {
  try {
    console.log(contato)
    const response = await axios.post('/api/criar', contato);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Erro ao criar contato: Verifique os dados do contato novamente.');
    } else {
      throw error;
    }
  }
}

export async function editarContato(contato) {
  const response = await axios.put('/api/editar/', contato, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export async function excluirContato(id) {
  const response = await axios.delete('/api/excluir/' + id);
  return response.data;
}