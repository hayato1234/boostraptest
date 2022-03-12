$(function(){
    $(".carousel").carousel({interval : 2000});
    $("#carouselButton").click(function(){
        // $("#carouselPause").removeClass("bg-danger").addClass("bg-secondary");
        // if($("#carouselPlay").hasClass("bg-secondary")){
        //     $("#carouselPlay").removeClass("bg-secondary").addClass("bg-danger");
        // }
        if($("#carouselButtonIcon").hasClass("fa-pause")){
            $("#carouselButtonIcon").removeClass("fa-pause").addClass("fa-play");
            $(".carousel").carousel("pause");
        } else {
            $("#carouselButtonIcon").removeClass("fa-play").addClass("fa-pause");
            $(".carousel").carousel("cycle");
        }
    });

    $("#reserveButton").on("click",function(){
        $("#reserveModal").modal("show");
    })
    
    $("#loginButton").on("click",function(){
        $("#loginModal").modal("show");
    })

})