function salvarNome(){
    let valorDigitado = document.getElementById("texto-inserido").value;

    let objetoNome = {
        nome: valorDigitado
    };

    let textoJSON = JSON.stringify(objetoNome)
    localStorage.setItem("dadoNome", textoJSON)

    document.getElementById("nome-salvo").inertText = valorDigitado;

}

