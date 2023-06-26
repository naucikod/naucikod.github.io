jQuery(document).ready(function($){
	
	"use strict";	
	

	//STICKY MENU...
	$("#menu-container").sticky({ topSpacing: 0 });
	//Mobile Menu
	$("#dt-menu-toggle").click(function( ){
		// event.preventDefault();
		let $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(event){
		event.preventDefault();
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(400);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(400);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
  
	/*Menu */


	let isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	let currentWidth = window.innerWidth || document.documentElement.clientWidth;

	//Menu Hover Start
	function menuHover() {
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(
			function(){
					$(this).find("> ul.sub-menu").stop().fadeIn('fast');
							},
			function(){
					$(this).find('> ul.sub-menu').stop(true, true).hide();
			}
		);
	}//Menu Hover End

	if( !isMobile ){
		if( currentWidth > 767 ){
			menuHover();
		}
	}
	
		
	//MAIN MENU...
	$("#main-menu ul li:has(ul)").each(function(){
		$(this).addClass("hasSubmenu");
	});
	
	$(window).load(function() {
		
		//ISOTOPE CATEGORY...
		let $container = $('.dt-sc-coursee-container');
		let $gw = 16;

		$('.dt-sc-sorting-container a').click(function(){ 
			$('.dt-sc-sorting-container').find('a').removeClass('active-sort');
			$(this).addClass('active-sort');

			let selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				},
				masonry: {
					columnWidth: $('.dt-sc-coursee-container .coursee').width(),
					gutterWidth: $gw
				}
			});
			return false;
		});
		
		//ISOTOPE...
		if($container.length){
			$container.isotope({ 
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				},
				masonry: {
					columnWidth: $('.dt-sc-coursee-container .coursee').width(),
					gutterWidth: $gw
				}
			});
		}
				
	});

	
	//PRETTYPHOTO...	
	let $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		//PRETTYPHOTO...
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			hook:'data-gal',
			show_title: false,
			social_tools: false,
			deeplinking: false
		});
	}
	
		 
	 //GALLERY SLIDESHOW...
	if($(".add-slider, .coursee-slider, .about-slider").length) {
		$('.add-slider, .coursee-slider, .about-slider').bxSlider({
			auto:false, video:false, useCSS:false, pager:'true', autoHover:true, adaptiveHeight:true
		});
	}

	
	//GO TO TOP...
	let offset = 220;
	let duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});

	//Parallax Sections...
	$('.dt-sc-parallax-section').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible === true) {
				$(this).parallax("50%", 0.3, true);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	
	
});

// animate css + jquery inview configuration
(function ($) {
    "use strict";
    $(".animate").each(function () {
        $(this).one('inview', function (event, visible) {
			let $delay;
			let $this = $(this),
				$animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
			$delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

            if (visible === true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            } else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
})(jQuery);