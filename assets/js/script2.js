let in1 = document.querySelector('.in1');
let in2 = document.querySelector('.in2');
let in3 = document.querySelector('.in3');
let boton = document.querySelector('.boton');
let resultado = document.querySelector('.resultado')
let alerta = document.querySelector('.alerta')

boton.addEventListener('click', ()=>{
    let valor1 = Number(in1.value) || 0
    let valor2 = Number(in2.value) || 0
    let valor3 = Number(in3.value) || 0

    let suma = valor1 + valor2 + valor3

    if (suma >=10){
        alerta.innerHTML = 'Llevas demasiados stickers';
    }
    else{
        alerta.innerHTML = 'Llevas ' + suma + ' stickers';
    }
});

