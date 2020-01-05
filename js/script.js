(function($, undefined){
    $(function(){

    	// menu
    	var checkbox = $('.checkbox');
    	var daMenu = $('#daMenu');

		checkbox.on('click', function(){
	    	daMenu.slideToggle();
		});

		//banner-sliders 
		$('.banner-sliders').slick({
	      dots: true,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  fade: true,
		  dotsClass: 'banner-dots',
		  nextArrow: '<button class="da-next-banner" aria-hidden="true"><img src="images/right.png"></button>',
          prevArrow: '<button class="da-prev-banner" aria-hidden="true"><img src="images/left.png"></button>',
		});

		// Личный кабинет
		$('.lichnyy-kabinet').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#lichnyyKabinet')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});

		// Свяжитесь с нами - кредит
		$('.zayavka-kredita').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKredita')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});

		// Свяжитесь с нами - вклад
		$('.zayavka-vklada').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalVklad')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});

		// Свяжитесь с нами - кредитка 
		$('.zayavka-kreditka').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalKreditka')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});

		// Свяжитесь с нами - страхование 
		$('.zayavka-strakhovaniye').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalStrakhovaniye')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});
			
		// Остались вопросы?
		$('.zayavka-voprosy').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalVoprosy')
						.css('display', 'block')
						.animate({opacity: 1, top: '30%'}, 400);
			});
		});
				

		// Закрыть
		$('.modal-close, .overlay').click( function(){
			$('#lichnyyKabinet, #modalKredita, #modalVklad, #modalKreditka, #modalStrakhovaniye, #modalVoprosy, #thanks').animate({opacity: 0, top: '40%'}, 400,
					function(){
						$(this).css('display', 'none');
						$('.overlay').fadeOut(200);
					}
			);
		});

		//mail
		$('#formKredita, #formVklad, #formVkladKhorosheyeNachalo, #formVkladStrategicheskiy, #formVkladSezonny, #formKreditka, #formStrakhovaniye, #formStrakhovaniye-2, #formVoprosy, #formKreditNalichnymi, #formKreditRefinansirovaniye').on('submit', function(e) {
		    e.preventDefault();
		    var formData = new FormData(this);
		    $.ajax({
		      url: 'send.php',
		      type: 'POST',
		      contentType: false,
		      processData: false,
		      data: formData,
		      success: function() {
		      	$('#modalKredita, #modalVklad, #modalKreditka, #modalStrakhovaniye, #modalVoprosy').css('display', 'none');
	      		$('#thanks')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 400);
	      		$('#formKredita, #formVklad, #formVkladKhorosheyeNachalo, #formVkladStrategicheskiy, #formVkladSezonny, #formKreditka, #formStrakhovaniye, #formStrakhovaniye-2, #formVoprosy, #formKreditNalichnymi, #formKreditRefinansirovaniye').trigger("reset");
		      },
		    });
		});


	    //maskedinput
	    var maskedinput = $('.maskedinput');  
	    maskedinput.mask('+7(999) 999-9999');

		// tabs
	    $('.da-tabs__tab').on('click', 'p:not(.active)', function() {
	     $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('.da-tabs__wrap').find('.da-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	    });	
		
	    // tabs
	    $('.da-tabs__tab').on('click', 'p:not(.active)', function() {
	     $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('.da-tabs__wrap').find('.da-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	    });	
		
    });
})(jQuery);
