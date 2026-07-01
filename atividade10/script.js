function tratamentoDeErroGenerico(){
    try {
        // Estamos executando uma função
        console.log("Iniciando meu bloco Try")

        // Declaramos uma função falsa pra ter um erro de propósito
        funcaoNaoDefinida()

        console.log("Essa linha, não vai ser executada")
    } catch (error) {
        console.error("Erro encontrado", error.message)
    }
}

function tratamentoDeErroEspecifico(){
    try {
        let idade = 10;

        if(idade < 0) {
            throw new Error("Idade inválida! Não pode ter uma idade menor que 0")
        } else {
            throw new Error("Idade inválida! Menor do que 18 anos")
        }
        
    } catch (error) {
        console.log("Erro ao cadastrar: ", error.message)
    }
}