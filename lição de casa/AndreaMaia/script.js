// Declarar as variáveis do Input Nota 1, Nota 2 e Média

// Capturar os valores do Input Nota 1, Nota 2 e Média
// Dica: 8usar parseInt para retornar o valor do input um número inteiro *

// Fazer a média e mostrar no Input Média
$(document).ready(function(){

  $("button").click(function(){
 
  //declaração das variáveis
  var nota1 = 0,nota2 = 0,media = 0;
 
  //pegando as notas dos campos inputs
  nota1 = parseInt($("input[nota1]").val());
  nota2 = parseInt($("input[nota2]").val());
  //formula para cálculo de média
  media = (nota1 + nota2) / 2;
  
  //mostra o resultado no input name=media
  $("input[media]").val(media);
 
  return false;
  });
  });