const headerMenuIzquierdo = document.querySelector('.header__menu-izquierdo');

headerMenuIzquierdo.addEventListener('click', (evento) => {
     // clic en las flechas abrira el evento del mouse
     // tener cuidado al hacer clic, es necesario hacer clic en la flecha fas fa-arrow-left o right
     // sino se hace bien indicará otro evento el header__menu-izquierdo'

     // console.log(evento);

     // target indica que elemento se a hecho clic
     // dentro de target se encuentra classList y className
     // la diferencia es que ClassName retorno ambas clases juntas fas fa-arrow-left
     // classList muestras las clases por separado
     const claseMenu = evento.target.classList 
     // DOMTokenList(2) ["fas", "fa-arrow-right", value: "fas fa-arrow-right"]
     // DOMTokenList(2) ["fas", "fa-arrow-left", value: "fas fa-arrow-left"]
     // esta tecnica se conoce como Delegation
     // es decir, en vez de crear dos variables distintas para seleccionar el boton izquierda o derecha
     // se creo un selector mas generico y despues se compara por medio de la claseMenu

     // console.log(claseMenu);
// Crear variables que seleccionen las clases flechas y la clase página
const contenedor = document.querySelector('.pagina'),
      flechaIzq  = document.querySelector('.fa-arrow-left'),
      flechaDer  = document.querySelector('.fa-arrow-right');
     // contains es una metodo de JS, revisa que una clase exista
     if (claseMenu.contains('fa-arrow-left')) {
          // Cerrar Menú Lateral
          // style.display son formas para modificar el CSS
          flechaDer.style.display = 'block';// al hacer clic en la flecha izquierda, flecha derecha aparece
          flechaIzq.style.display = 'none'; // al hacer clic flechaIzq desparece
          // agregar una clase en la clase pagina. es decir la clase tiene que existir para agregar otra
          contenedor.classList.add('no-menu');
          // console.log('Cierra el menu');  
// estamos escuchando lo que pasa en la class="menu-izquierdo". esto es muy generico
// se necesita que solo cuando se haga clic en la flecha  
// por tanto se hace else if indicando contains('fa-arrow-right') 
     } else if(claseMenu.contains('fa-arrow-right')){
          // console.log('Abre el menu'); 
          flechaDer.style.display = 'none';// al hacer clic en la flechaDer, flecha derecha desaparece
          flechaIzq.style.display = 'block'; // al hacer clic flechaIzq aparece        
          // Quitar la clase no-menu
          contenedor.classList.remove('no-menu');
     }

})

