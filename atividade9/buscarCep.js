function buscarCep() {
    let cepDigitado = document.getElementById("Cep").value;

    //Verificando se o usuario digitou o cep.
    if (cepDigitado === "") {
        return;
    }

    //aqui eu criei uma nova variavel pra tirar o hifen.
    let cepLimpo = validarCep(cepDigitado)

    //colocando pop-up caso usuario tenha feito errado.
    if (cepLimpo === false) {
        alert("CEP inválido. Digite apenas 8 caracteres.");
        return;
    }

    //fazendo conexão com api
    document.getElementById("Cep").value = cepLimpo;
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (dados.erro) {
            alert("CEP não encontrado")
            return;
        }
        document.getElementById("Rua").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Uf").value = dados.uf;
    })
}

//aqui continuei resolvendo o hifen com replace que tem no javacript
function validarCep(cepComHifen){

    let cep = cepComHifen.replace("-", "");

    //*pra poder ter so 5 numeros vi que tem a funçao length 
    // e usei retur pra o computador entender se deve continuar ou nao
    if (cep.length !== 8) {
        return false;
    }

    //esse bonus foi pq vi que tem funçao pra so poder escrever numero :o
    if (isNaN(cep)) {
        return false;
    }
    return cep;
}

const campoCep = document.getElementById("Cep");
campoCep.addEventListener('focusout', buscarCep);