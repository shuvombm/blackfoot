(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        //Slicknav Responsive menu//
        $("ul#nav").slicknav({
            prependTo: ".slicknav-responsive-menu"
        });

        //Owl carousel Start//
            $(".testimonial-wrapper").owlCarousel({
             items:1,   
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots:true,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
            
         });

         $(".site-gallery-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots:false,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
             margin: 10,
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:3,
                 },
                 1000:{
                     items:5,
                 }
             }
            
         });   



       

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 