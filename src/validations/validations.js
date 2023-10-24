export function validarTelefone(telefone) {
    const telefoneNumerico = telefone.replace(/\D/g, '');
    if (telefoneNumerico.length !== 11) {
      return telefoneNumerico.slice(0, 11);
    }
    return telefone;
}