// Main
$(document).ready(function () {
	// $('.social .fa-twitter').on("mouseenter",function(){$('.social .fa-twitter').addClass("animated shake infinite")})
	// .on("mouseleave",function(){$('.social .fa-twitter').removeClass("animated")})

	// // $('.social .fa-facebook').on("mouseenter",function(){$('.social .fa-facebook').addClass("animated shake infinite")})
	// // .on("mouseleave",function(){$('.social .fa-facebook').removeClass("animated")})
	// $('.social .fa-facebook-f').on("mouseenter",function(){$('.social .fa-facebook-f').addClass("animated shake infinite")})
	// .on("mouseleave",function(){$('.social .fa-facebook-f').removeClass("animated")})
	$('.home_banner_2 .owl-carousel.owl-theme').owlCarousel({
		center: true,
		items:1,
		loop:true
	});
	$('.home_client .owl-for').owlCarousel({
		items: 1,
		loop:true,
		dots: false,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive: {
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 6
			}
		}
	});
	});
	