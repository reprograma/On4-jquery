
    $(window).scroll(function(){
        $('img').fadeOut(2000) // ao rolar a pagina a imagem some.
      });

      $(document).ready(function() {
        $("button").click(function() {
          $("img").fadeOut(2000);
        });
      });