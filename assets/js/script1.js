let imgpikachu = document.querySelector('.imgpika');

imgpikachu.addEventListener('click', ()=>{
    if (imgpikachu.style.border ==='2px solid red'){
        imgpikachu.style.border = '';
    }

    else{
        imgpikachu.style.border ='2px solid red';
    }
})

