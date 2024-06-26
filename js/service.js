
$( document ).ready(function() {
    $("#colorpicker").val($(':root').css('--maincolor'));
    $("#changecolorbutton").click(function(){
        $(':root').css('--maincolor', $("#colorpicker").val());
    }); 
});