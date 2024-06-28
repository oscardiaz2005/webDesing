document.addEventListener('DOMContentLoaded', function () {
    const hamButtons = document.querySelectorAll('.ham');
    const enlaces = document.querySelector('.enlacesmenu');
    const enlaces2 = document.querySelector('.enlacesmenu2');
    const barras = document.querySelectorAll('.ham span');




    function mostrar() {
        let header1 = document.getElementById('header1');
        let header2 = document.getElementById('header2');
        let altura = 500;

        let scrollIndex = window.scrollY;

        if (scrollIndex > altura) {
            header1.classList.add('oculto');
            header2.classList.remove('oculto');
        } else {
            header1.classList.remove('oculto');
            header2.classList.add('oculto');
        }
    }

    mostrar();

    hamButtons.forEach(hamButton => {
        hamButton.addEventListener('click', () => {
            enlaces.classList.toggle('activado');
            enlaces2.classList.toggle('activado');
            barras.forEach(child => { child.classList.toggle('animado') });
            hamButtons.forEach(btn => btn.classList.toggle('rotate'));
            document.body.classList.toggle('no-scroll');
        });
    });

    window.addEventListener('scroll', function () {
        mostrar();
    });
});

const imagenes =document.getElementsByClassName('efecto')
new simpleParallax(imagenes , {scale:1.5}) 

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.razon-button');
    const secciones = document.querySelectorAll('.razon-section');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const target = boton.getAttribute('data-target');
            secciones.forEach(seccion => {
                seccion.classList.remove('act');
            });
            document.querySelector(`.${target}`).classList.add('act');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const infoButtons = document.querySelectorAll('.info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const infoSection = document.getElementById(targetId);

            infoSection.style.display = infoSection.style.display === 'block' ? 'none' : 'block';
        });
    });
});



document.getElementById('pythonBtn').addEventListener('click', function (event) {
    event.preventDefault();
    showForm('python-form');
});

document.getElementById('javascriptBtn').addEventListener('click', function (event) {
    event.preventDefault();
    showForm('javascript-form');
});

document.getElementById('javaBtn').addEventListener('click', function (event) {
    event.preventDefault();
    showForm('java-form');
});

document.getElementById('designBtn').addEventListener('click', function (event) {
    event.preventDefault();
    showForm('design-form');
});

// Función para mostrar el formulario correspondiente y ocultar los demás
function showForm(formId) {
    document.getElementById('initial-form').style.display = 'none';
    document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}



const fxxx=document.querySelector('#pruebaaa')
fxxx.addEventListener('click' , (e)=>{
    const enlaces = document.querySelector('.enlacesmenu');

    fxxx.classList.toggle('desactivado');
  
})






