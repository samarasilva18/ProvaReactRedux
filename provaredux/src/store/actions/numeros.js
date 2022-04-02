export function alterarNumeroInserido(novoNumero) {
    return{
        type: 'NUM_IN_ALTERADO',
        payload: novoNumero
    }
}