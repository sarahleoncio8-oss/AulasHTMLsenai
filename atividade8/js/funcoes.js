function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}    

function calcularComImposto(valorProduto, valorFinal){
    
    if (valorProduto < 50) {
        valorFinal = valorProduto + (valorProduto * 0.20);
    } else {
        let primeiroPasso = valorProduto + (valorProduto * 0.20);
        
       valorFinal = primeiroPasso + (primeiroPasso * 0.90);
    }
    salvarImposto(valorProduto,valorFinal)

}

function salvarImposto(valorProduto,valorFinal){
    let imposto = {
        num1: valorProduto,
        resultado : valorFinal

    };

    console.log(imposto);

    let JSONhistorico = JSON.parse(localStorage.getItem("imposto")) || [];
    JSONhistorico.push(imposto);

    localStorage.setItem("imposto", JSON.stringify(JSONhistorico));
}

function apagarLocalStorage(){

    let confirmaApagar = window.confirm("Você deseja apagar seu histórico?")
    
    if(confirmaApagar){
        localStorage.clear();
    }
}

    



/*
    Nova função de cálculo de imposto de importação

    Se o produto custar menos que $50 (cinquenta dolares)
    Você vai ter que pagar o valor produto, mais 20%

    Se o produto custar mais do que $50
    Você vai ter que pagar o valor do produto +20%, depois mais 90% sobre o resultado dos 20%

    Seja salvo num novo objeto, dentro do local storage, seu hitórico de coversão.

    Ex: histórico de calculos matemáticos, e histórico de conversões

    Nao precisa converter valor de dolar pra real, e é pra fazer dentro da culculadora que ja temos

    Mas é pra colocar esse valor de importação em um único botao que ele ja converte
 
    Olhar em aba persistente na atividade 7 e em alguma outra que nao lembro, persistente no navegaodor

    Usar if else let, segundo codigos de colegas
 */