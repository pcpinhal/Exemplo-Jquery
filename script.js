$(document).ready(function(){
        
    $("#esconder").click(function(){            
        $('.texto').hide('slow');
    });

    $("#exibir").click(function(){
        $('.texto').show('fast');        
    });
});