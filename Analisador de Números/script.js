let numeros = [];
var maior = 0
var menor = 101
var soma_total = 0
var media = 0
function adicionar() {
    
    var num = document.querySelector('#number');
    var n = Number(num.value);
    var a = document.querySelector('#area');
    

    if (n >= 1 && n <= 100){

        if (n > maior) {
            //Maior número
            maior = n;
        }

        if (n <= menor){
            //Menor número
            menor = n
        }

        numeros.push(n);
        a.innerHTML += `${n}\n`;

        //Soma de todos os números
        soma_total = soma_total + n;

    }

    else {
        alert('Número Inválido');
    }
}

function finalizar(){
    var quantidade = document.querySelector('.quantidade');
    //Quantidade de números
    var quant = numeros.length;
    //Média dos números
    var media = soma_total / quant

    var maiormsg = document.querySelector('.maiormsg');
    var menormsg = document.querySelector('.menormsg');
    var somamsg = document.querySelector('.somamsg');
    var mediamsg = document.querySelector('.mediamsg')

    quantidade.innerHTML = `Ao todo, temos ${quant} números cadastrados.`;
    maiormsg.innerHTML = `O maior número digitado foi ${maior}`;
    menormsg.innerHTML = `O menor número digitado foi ${menor}`;
    somamsg.innerHTML = `A soma de todos os números é igual a ${soma_total}`;
    mediamsg.innerHTML = `A media de todos os números é igual a ${media}`
}