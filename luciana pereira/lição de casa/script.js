$('document').ready(function(){
    $('button').click(function(e){
        e.preventDefault()
        
        let nota1 = parseInt($('.nota1').val())
        let nota2 = parseInt($('.nota2').val())
        let media = ((nota1 + nota2) / 2)

        $('.media').val(media)

        console.log(nota1, nota2, media)
    })

});