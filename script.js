$(function(){
    
    $('.btn').click(function(){
        $('.btn').removeClass('actbtn');
        $(this).addClass('actbtn');
        if($('.abt1').hasClass('actbtn')){
            $('#Lnd').slideDown();
        }
        else{
            $('#Lnd').slideUp();
        }
        if($('.abt2').hasClass('actbtn')){
            $('#Psg').slideDown();
        }
        else{
            $('#Psg').slideUp();
        }
        if($('.abt3').hasClass('actbtn')){
            $('#Tko').slideDown();
        }
        else{
            $('#Tko').slideUp();
        }
        if($('.abt4').hasClass('actbtn')){
            $('#Osl').slideDown();
        }
        else{
            $('#Osl').slideUp();
        }



        if($('.abt1').hasClass('actbtn')){
            $(this).attr('id', 'btn1');
        }
        else{
            $('.abt1').removeAttr('id', 'btn1');
        }
        if($('.abt2').hasClass('actbtn')){
            $(this).attr('id', 'btn2');
        }
        else{
            $('.abt2').removeAttr('id', 'btn2');
        }
        if($('.abt3').hasClass('actbtn')){
            $(this).attr('id', 'btn3');
        }
        else{
            $('.abt3').removeAttr('id', 'btn3');
        }
        if($('.abt4').hasClass('actbtn')){
            $(this).attr('id', 'btn4');
        }
        else{
            $('.abt4').removeAttr('id', 'btn4');
        }
        
        
    });
});