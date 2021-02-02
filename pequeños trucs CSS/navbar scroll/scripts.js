$(document).ready(function () {
    $("#banner").css({ "height": $(window).height() + "px" });


    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();


        if(scroll>200){
            console.log(scroll)
            if(!flag){

                $("#logo").css({"margin-top": "-5px","width":"50px", "height":"50px"});

                $("header").css({"background-color": "#3c3c3c"})
                
                flag = true;
            }
        }else{
            if(flag){

                $("#logo").css({"margin-top": "150px","width":"250px", "height":"250px"})
                $("header").css({"background-color": "transparent"})
                flag= false;
            }
        }


    })

});