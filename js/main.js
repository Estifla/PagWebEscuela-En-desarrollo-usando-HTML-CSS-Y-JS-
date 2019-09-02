$(document).ready(function(){
var imgItems = $('.slider li').length; //Numero de Slides
var imgPos = 1; //Posicion de imagen

//Agregar paginación
for(i = 1; i <= imgItems; i++){
    $('.pagination').append('<li><span class="fa fa-circle"></span></li>')
}

$('.slider li').hide(); //Ocultamos Slides
$('.slider li:first').show(); //Mostramos el primero
$('.pagination li:first').css({'color': '#CD6E2E'}); //Damos estilos al primer item

//Ejecucion de Funciones
$('.pagination li').click(pagination);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);

setInterval(function(){
    nextSlider();
},4500);  

//Funciones
function pagination(){
    var paginationPos = $(this).index() + 1;


    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos + ')').fadeIn();

    //Estilos para la paginacion seleccionada
    $('.pagination li').css ({'color': '#858585'});
    $(this).css({'color': '#CD6E2E'});

    imgPos = paginationPos;
}

function nextSlider(){
    if (imgPos >= imgItems){
        imgPos = 1;
    } else {
        imgPos++;
    }
    $('.pagination li').css ({'color': '#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css ({'color': '#CD6E2E'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos + ')').fadeIn();    
}


function prevSlider(){
    if (imgPos <= 1){
        imgPos = imgItems;
    } else {
        imgPos--;
    }
    $('.pagination li').css ({'color': '#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css ({'color': '#CD6E2E'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos + ')').fadeIn();    
}
});

