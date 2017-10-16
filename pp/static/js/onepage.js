$(document).ready(function(){

    function makeNewSize(){
        var wh = $(window).height();
        var ww = $(window).width();
 /*       if (wh>=ww){
            $('.slide').height(ww);
        } else {
            $('.slide').height(ww/16*8.9);
        }*/
        $('.slide').height(ww/16*9);
    }

    makeNewSize();

    $(window).on('resize', makeNewSize);

    
});