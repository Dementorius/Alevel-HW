const btn__burger = document.querySelector('#btn-burger');
const btn__close = document.querySelector('#btn-close');
const header = document.querySelector('#header');


btn__burger.addEventListener('click', function(){
    header.classList.add('tablet-header');

    btn__close.addEventListener('click', function(){

        header.classList.replace('tablet-header tablet-header-close')
    })
})