$(document).ready(function(){
    var sp = 1;
    var count=13;
    var g=1;
    var adaptive = true;
    var touched = false;

    autoList=function(){
            setTimeout(function(){
                if (!touched){
                    changePhoto(1);
                }
                touched = false;
                autoList();
            },5000);
    };

    autoList();


    function getImageID(){
        var res = '.p'+sp;
        //var res = '#g'+g+'p'+sp;
        // console.log(res);
        return (res);
    }

    function changePhoto(inc){

        var ni=sp;
        ni+=inc;
        if (ni>count){
            ni=1;
        }
        if (ni===0){
            ni=count;
        }

        $(getImageID()).fadeOut(300);
        sp=ni;
        setTimeout(function(){
            $(getImageID()).fadeIn(600);
        }, 305);
    }


    // Running the gallery
    $('.photo').hide();
    if(adaptive){
        //$('.gallery').height($(window).height()*0.95-70);
    }
    
    $(getImageID()).fadeIn(300);


    // Event listeners
    $('.photo').on('click', function(){
        touched = true;
        changePhoto(1);
    });

    $('#right-arrow').on('click', function(){
        touched = true;
        changePhoto(1);
    });

    $('#left-arrow').on('click', function(){
        touched = true;
        changePhoto(-1);
    });

    $('body').keyup(function(e){
        if(e.keyCode == 32 || e.keyCode == 39 || e.keyCode == 40 ){
            e.preventDefault();
            touched = true;
            changePhoto(1);
        }
        else if(e.keyCode == 37 || e.keyCode == 38){
            e.preventDefault();
            touched = true;
            changePhoto(-1);
        }
    });

});