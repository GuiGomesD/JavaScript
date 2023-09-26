function contar(){

    var i = document.querySelector('#inicio');
    var inicio = Number(i.value);

    var f = document.querySelector('#fim');
    var fim = Number(f.value);

    var p = document.querySelector('#passo')
    var passo = Number(p.value);

    var msg = document.querySelector('.texto');

    msg.innerHTML = ``

    if (inicio < fim) {
        //Contagem Crescente
        for (c = inicio ; c <= fim ; c += passo){
            msg.innerHTML += `${c} \u{1F449}`
        }
    }

    else if (inicio > fim) {
        //Contagem Decrescente
        for (c = inicio ; c >= fim ; c-= passo){
            msg.innerHTML += `${c} \u{1F449}`
        }
    }
    msg.innerHTML += `\u{1F3C1}`
}

