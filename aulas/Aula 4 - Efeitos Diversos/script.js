$(document).ready(function () {
    $('.btnFadeOut').click(function(){
        $('.div1').fadeOut();
        $('.div2').fadeOut('slow');
        $('.div3').fadeOut(3000) //Para sair em 3 segundos = 3000
    });

    $('.btnFadeIn').click(function(){
        $('.div1').fadeIn();
        $('.div2').fadeIn('slow');
        $('.div3').fadeIn(3000) //Para mostrar em 3 segundos = 3000
    });
});