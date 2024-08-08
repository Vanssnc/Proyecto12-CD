let boton = document.querySelector('.boton');
let alerta = document.querySelector('.alerta');

const password1 = '911';
const password2 = '714';

boton.addEventListener('click', ()=>{
    let num1 = document.querySelector('.select1').value;
    let num2 = document.querySelector('.select2').value;
    let num3 = document.querySelector('.select3').value;
    let contraseña = num1 + num2 + num3;

    if (contraseña === password1){
        alerta.innerHTML = 'Password 1 correcta';
    }

    else if(contraseña === password2){
        alerta.innerHTML = 'Password 2 correcta';
    }

    else{
        alerta.innerHTML = 'Password incorrecto';
    }
})
