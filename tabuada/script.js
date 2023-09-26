
function gerar(){
    var n = document.querySelector('#numero');
    var numero = Number(n.value);

    var area = document.querySelector('#area');

    area.innerHTML = ''
    
    for (var c = 1; c <= 10; c++){
        var res = numero*c
        area.innerHTML += `${numero} x ${c} = ${res}\n`
    }
}