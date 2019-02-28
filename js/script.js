
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// button scrollToTop
// $(document).ready(function(){

//     "use strict";

//     $('#scrollToTop').click(function(){
//     $('html, body').animate({scrollTop : 0},800);
//     return false;
//     });

//     // button scrollToTop
//     $(window).scroll(function () {

//     if ($(this).scrollTop() > 1000) {
//         $('#scrollToTop').fadeIn();
//     } else {
//         $('#scrollToTop').fadeOut();
//     }

//     });



//     $(window).scroll(function(){
//     if ($(this).scrollTop() > 200) {
//         $('.navbar').addClass("nav-fixed");
//     }else {
//        $('.navbar').removeClass("nav-fixed");
//     }

//     });

// });



 //Code Loading Page
$(document).ready(function()
 {
     $("#circle").fadeOut(3000,
     function()
     {
         // Remove All <div id="pageLoader"></div>
         $(".wrapper-body").css({ 'opacity': 1 });
         $(this).remove();
     });
    

 });

// $(window).load(function() {

//     $('.wrapper-body').fadeIn(2000,function() {

//         $('#').remove();

//     })

// });

$(document).ready(function() {

    'use strict';

    // Navbar
    $('.menu-toggle').click(function() {
    
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
        
    });


     // search-toggel
     $('.search a.nav-link').click(function() {
         $('.search .site-search-form').toggleClass('show');
     });
    

    // entro video

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    });
      
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    });

    $(".share").on('click', function(e) {
        $(".fab").removeClass("no");
        if(e.target != this) return;
        $('.share, .fab').toggleClass("active");
    });

    // profile progress
    $(".profile-progress").each(function(){
    
        var $bar = $(this).find(".bar");
        var $val = $(this).find("span");
        var perc = parseInt( $val.text(), 10);
    
        $({p:0}).animate({p:perc}, {
            duration: 3000,
            easing: "swing",
            step: function(p) {
                $bar.css({
                transform: "rotate("+ (-45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
                // 45 is to add the needed rotation to have the borders at the bottom
                });
                $val.text(p|0);
            }
        });
    });


    

    // var headHeight = $('.topHeader').innerHeight();
    //     $('body').css('paddingTop', headHeight);

});
// document ready  


$(window).scroll(function() {

    // Add Class "NavbarFixed" on Navbar
    if( $(this).scrollTop() > 500 ) {

        // var topheader = $('.topHeader');
        console.log($(document).scrollTop());
        $('.topHeader').addClass('NavbarFixed');

    } else {$('.topHeader').removeClass('NavbarFixed');}

    

});