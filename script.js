//changes navbar color when scrolling window height
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20/*window.innerHeight - 50*/)
            $('.navbar').addClass("sticky");
        else
            $('.navbar').removeClass("sticky");
        
        if (this.scrollY > 500) 
            $('.scroll-up-btn').addClass("show");
        else
            $('.scroll-up-btn').removeClass("show");
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    /*$(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("navPaddy");
        }else{
            $('.navbar').removeClass("navPaddy");
        }

    });*/

    //toggle menu/navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // //owl carousel script
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items:1,
    //             nav: false
    //         },
    //         600:{
    //             items:2,
    //             nav: false
    //         },
    //         1000:{
    //             items:3,
    //             nav: false
    //         }
    //     }
    // });
});