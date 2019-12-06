$(document).ready(function() {
    $(".addTarefa").on("keyup", function(e) {
      // 13 significa a tecla Enter e verifica se o input não esta vazio
      if (e.keyCode == 13 && $(".addTarefa").val() != "") {

        //armazei a div criada em jquery + o valor do input na variavel tarefa
        let tarefa = $('<div class="tarefa"></div>').text(
          $(".addTarefa").val()
        );
         
        //armazei o icone lixo dentro da variavel deletar (icone da fontawesome) + função deletar ao clicar
        let deletar = $('<i class="fas fa-trash-alt"></i>').click(
          function() {
            $(this).parent().remove();
          }
        );

        //adicionei o icone a div tarefa
        tarefa.append(deletar);
        //adionado a variavel tarefa a div incompleta
        $(".incompletas").append(tarefa);

        //limpar o valor do input apos o enter
        $(".addTarefa").val("");
      }
    });
  });