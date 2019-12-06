$(document).ready(function () {
    // $('button').click(function () {
    //     $('h1')
    //         .css({
    //             'color': 'red',
    //             'font-size': '50px',
    //             'font-family': 'verdana'
    //         });

    //     $('button').css({
    //         'border': 'none',
    //         'background-color': '#555584',
    //         'color': 'white',
    //         'padding': '10px 20px',
    //         'border-radius': '10px',
    //         'cursor': 'pointer'
    //     });
    // // });
    // Adicionando e removendo classes -->
    $('button').mouseover(function(){
        $('button').addClass('btn');
    });
    $('button').mouseleave(function(){
        $('button').removeClass('btn')
    });
});