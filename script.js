$(document).ready(function(){
        
    $("#esconder").click(function(){            
        $('.texto').hide('slow');
    });

    $("#exibir").click(function(){
        $('.texto').show('fast');        
    });

    $("#direita").click(function(){
        $('.caixa').animate({left: '1000px'});        
    });
    $("#esquerda").click(function(){
        $('.caixa').animate({left: '10px'});        
    });
});