// Mostrar el loader por 6 segundos antes de mostrar el contenido
setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('main').classList.remove('hidden'); // Quitamos la clase 'hidden' para mostrar el contenido
    document.querySelector('header').classList.remove('hidden'); // Quitamos la clase 'hidden' para mostrar el contenido
    document.getElementById('abrir').classList.remove('hidden'); // Quitamos la clase 'hidden' para mostrar el contenido
}, 6000); // 4000 milisegundos = 4 segundos

// script para abrir y ocultar

// funcion para abrir
window.abrir.addEventListener('click', ()=>{
    window.dialog.showModal()
})

// funcion para cerrar
window.ocultar.addEventListener('click', ()=>{
    window.dialog.close()
})


// FONDO OSCURO-CLARO

const bdark = document.querySelector('#bdark')
const body = document.querySelector('body')

load()

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode')
    store(body.classList.contains('darkmode'))
})

// guardamos en localstorage información claro-oscuro
function load(){

    const darkmode = localStorage.getItem('darkmode')

    if(!darkmode){
        store('false')
    }else if(darkmode == 'true'){
        body.classList.add('darkmode')
    }
}


function store(value){
    localStorage.setItem('darkmode', value)
}