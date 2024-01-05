let foguet = document.getElementById('foguete');



window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    foguet.style.marginBottom = value * .4 + 'px';

});