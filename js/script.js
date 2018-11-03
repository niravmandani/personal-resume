/* =================================================

Template Name:  Escoby - vCard & Resume Template
Author: Beeskip
Version: 1.0

=================================================== */


$(function () {
	'use strict';
	
	/* Vars */
	
	var width = $(window).width();
	var height = $(window).height();

	/*---------------------- 
	   Preloader
	 ----------------------------*/
	$(window).on('load', function () {
		$(".loading").animate({
			"top": "-100%"
		}, 700, function () {
			$(this).remove();
		});
		
	});
	
	/*---------------------- 
	   work section
	 ----------------------------*/
	 
	  $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            
        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        

        // images have loaded

    });

    //Image Light Box Popup
    $('.image-link').magnificPopup({type:'image'});
	
	
	/*---------------------- 
	   client carousel
	 ----------------------------*/
	
	$(".owl-carousel").owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            pagination: false,
			margin:30,
             
            nav: false,
            items: 6,
            navElement: "span",
            navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
            responsive: {
                0: {
                    items:2
                },
                540: {
                    items: 3
                },
                767: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
	 
	 /*---------------------- 
	   Counter Up Facts 
	 ----------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
	

	/*---------------------- 
	   Typed subtitle
	 ----------------------------*/

	$('.typed-title').typed({
		stringsElement: $('.typing-title'),
		backDelay: 5000, /* Delay in text change */
		typeSpeed: 0, /* Typing speed */
		loop: true
	});


	/*---------------------- 
	   Menu mobile
	 ----------------------------*/

	$('.header').on('click', '.menu-btn', function(){
		if($('.header').hasClass('opened')) {
			$('.header').removeClass('opened');
		} else {
			$('.header').addClass('opened');
		}
	});


	/*---------------------- 
	   Header Menu Desktop
	 ----------------------------*/
	
	if($('#home-card').length) {
		$('.top-menu').on('click', 'a', function(){

			/* vars */
			var lines_grid = $('.lines-grid');
			var id = $(this).attr('href');
			var card_items = $('.card-inner');
			var card_item = $(id);
			var menu_items = $('.top-menu li');
			var menu_item = $(this).closest('li');
			
			if(!menu_item.hasClass('active') & $('#home-card').length) {

				/* close card items */
				menu_items.removeClass('active');
				lines_grid.removeClass('loaded');

				/* open card item */
				menu_item.addClass('active');
				setTimeout(function() {
					lines_grid.addClass('loaded');
					$(card_items).removeClass('active');
					$(card_item).addClass('active');
				}, 1000);
			}
		
			return false;
		});
	}

});