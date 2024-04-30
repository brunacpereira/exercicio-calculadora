function calculaMedia(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var soma = (nota1 + nota2 + nota3);
    var media = soma/3;

    alert("A média das notas é: " + media);
}

// Função orquestradora
function calcula(){
    var operacao = document.getElementById('operacao').value;
    
    // Removendo acentuação e convertendo para letras minúsculas
    var op = operacao.normalize("NFD").toLowerCase();

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    if(op == '+' || op == 'soma'){
        soma(numero1,numero2);
    }

    else if(op == '-' || op == 'subtracao'){
        subtrai(numero1,numero2);
    }

    else if(op == '*' || op == 'multiplicacao'){
        multiplica(numero1,numero2);
    }

    else if(op == '/' || op == 'divisao'){
        divide(numero1,numero2);
    }

    else{
        alert("Operação inválida");
    }

}

function soma(numero1, numero2){
    var soma = numero1 + numero2;

    alert("A soma dos números é:" + soma);
}

function subtrai(numero1, numero2){
    var subtracao = numero1 - numero2;

    alert("A subtração dos números é:" + subtracao);
}

function multiplica(numero1, numero2){
    var multiplicacao = numero1 * numero2;

    alert("A multiplicação dos números é:" + multiplicacao);
}

function divide(numero1, numero2){
    
    if(numero2 == 0){
        alert("Não é possível efetuar a divisão por zero");
    }
    else{
        var divisao = numero1 / numero2;
        alert("A divisão dos números é:" + divisao);
    }
       
}