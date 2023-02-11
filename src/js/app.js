//cargar eventos
document.addEventListener("DOMContentLoaded", function(){
    eventListener();
    darkMode();
});

//Ejecutar eventos
function eventListener(){
    //menu-hamburguesa
    const menuHamb = document.querySelector(".menu-hamburguesa");

    menuHamb.addEventListener("click", menuHamburguesa);

    function menuHamburguesa(){
        const navbar = document.querySelector(".navbar");

        navbar.classList.toggle("mostrar");

    };
}

function darkMode(){
    const preferencia = window.matchMedia('(prefers-color-scheme:dark)');
    //console.log(preferencia.matches);

    if(preferencia.matches){
        document.body.classList.add("dark-mode");
    }else{
        document.body.classList.remove("dark-mode");
    }

    preferencia.addEventListener("change", function(){

        if(preferencia.matches){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }

    });

    const btnDarkmode = document.querySelector(".btn-darkmode");

    btnDarkmode.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
    });
}