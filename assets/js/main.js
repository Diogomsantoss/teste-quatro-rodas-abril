$(document).ready(function () {

	
	// botao menu mobile, clica slide toggle
	$( ".menu-hamburguer-link" ).click(function() {
		$( ".header-menu-nav" ).slideToggle();
	});

	// scroll mostra sticky bar (barra fixa depois do scroll)
	$(window).scroll(function() {
		if ($(this).scrollTop() > 180){  
			$('.red-stripe-header.scroll').addClass("sticky");
		}
		else{
			$('.red-stripe-header.scroll').removeClass("sticky");
		}
	});

	// mostra sub-menu da navegacao do header
	$(".header-menu-nav .header-menu .menu-item.carros").on({
		mouseenter: function () {
			$(".sub-menu-header").fadeIn( 150 );
		},
		mouseleave: function () {

			$(".sub-menu-header").on({
				mouseenter: function () {
					
				},
				mouseleave: function () {
					$(".sub-menu-header").fadeOut(150 );
				}
			});

			
		}
	});

});