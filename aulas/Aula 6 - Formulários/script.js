$(document).ready(function() {
    // $('#inputNome').keydown(function(){ //keydown ao pressionar a tecla do teclado. e # quando for id.
    //     $('#inputNome').css ('backgroud-color', 'red')
    // })

    // $('inputEmail').keyup(function(){
    //     $('#inputEmail').css ('backgroud-color', 'blue')
    // });

    $('button').click(function(){ 
        e.preventDefault; //para cortar a ação de carregamento de pagina
        // alert('Formulario enviado com Sucesso')
        let nome = $('#inputNome').val();
        let email = $('#inputEmail').val();
        let telefone = $('#inputTelefone').val();

        if (nome == '') {
            $('.erro1').text ('Favor preencher o nome.')

        } else if  (email == '') {
            $('.erro2').text ('Favor preencher o Email.')


        } else if  (telefone == '') {
            $('.erro3').text ('Favor preencher o Telefone.')
        
        } else {
            alert("Mensagem enviada com sucesso!")

            // Limpar os inputs e os texts
            $('#InputNome').val('') //o val e  para capturar o valor do input 
            $('#inputEmail').text('') //para escrever um texto
            $('#inputTelefone').val('')
            $('.erro1').text('')
            $('.erro2').text('')
            $('.erro3').text('')
        }
    })
});
