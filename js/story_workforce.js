$(function () {
//	$('.slick-workforce1').slick({
//		dots: false,
//		arrows: true,
//		vertical: true,
//		draggable: false,					
//		infinite: false,
////		fade: true,
//		verticalScrolling: true,
//		appendArrows: $(".slide4.multi-icon2")
//	});
//	$('.slick-workforce2').slick({
//		dots: false,
//		arrows: true,
//		vertical: true,
//		draggable: false,					
//		infinite: false,
////		fade: true,
//		verticalScrolling: true,
////		appendArrows: $(".story-nav")
//	});

		function slickSpeed(el, init){
			var speed = 0;

			if(init){
				speed = el.find('.slide-init').data('time');
			}
			el.slick("slickSetOption", "autoplaySpeed", speed);
  			el.slick("slickGoTo",0,false);
			
			el.slick('slickPlay').on("afterChange", function(e, slick, currentSlide) {
	            		speed = el.find('div[data-slick-index="'+ slick.currentSlide + '"]').data("time");
	            		el.slick("slickSetOption", "autoplaySpeed", speed);

	            		if(slick.slideCount === currentSlide + 1){
	            			// el.slick('slickGoTo', 0, true);
	            		}
	    		});
		}

	$('.story-slider').fullpage({
    
    
    
		//		paddingTop: '83px',
		scrollOverflow: true,
		controlArrows: true,
		//		slidesNavigation: true,
		onLeave: function(index, nextIndex, direction){
      
      if (nextIndex == 1){
        $('.story-nav').addClass('hidden_arrow');
      }
      
			if (index && direction == 'down') {
				$('body').addClass('nav-hide').removeClass('nav-reveal');
				$("#story-next div").removeClass("bounce delayed").delay(15000).queue(function () {
					$(this).addClass("bounce delayed").dequeue();
				});
			}
			if(index && direction =='up'){
				$('body').addClass('nav-reveal').removeClass('nav-hide');
			}
			
			if ( (index == 1 && direction =='down') || (index == 3 && direction =='up'))  {
        
				$("#workforce2").get(0).load();
				$("#workforce2").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide2 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide2 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 3 && direction =='down') || (index == 5 && direction =='up'))  {
//				$("#workforce4").get(0).play();
//				$('.slide4 .rotating-copy').slick('slickPlay');
			}
			if ( (index == 4 && direction =='down') || (index == 6 && direction =='up'))  {
				$("#workforce5").get(0).load();
				$("#workforce5").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide5 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide5 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 5 && direction =='down') || (index == 7 && direction =='up'))  {
				$("#workforce6").get(0).load();
				$("#workforce6").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide6 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide6 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
//			if ( (index == 6 && direction =='down') || (index == 8 && direction =='up'))  {
//				$("#workforce7").get(0).play();
//				$('.slide7 .rotating-copy').slick('slickPlay');
//			}
			if ( (index == 6 && direction =='down') || (index == 8 && direction =='up'))  {
				$("#workforce8").get(0).load();
				$("#workforce8").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide8 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide8 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 7 && direction =='down') || (index == 9 && direction =='up'))  {
				$("#workforce9").get(0).load();        
				$("#workforce9").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide9 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide9 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 8 && direction =='down') || (index == 10 && direction =='up'))  {
				$("#workforce10").get(0).load();
				$("#workforce10").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide10 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide10 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 9 && direction =='down') || (index == 11 && direction =='up'))  {
				$("#workforce11").get(0).load();
				$("#workforce11").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide11 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide11 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			if ( (index == 10 && direction =='down') || (index == 13 && direction =='up'))  {
				$("#workforce12").get(0).load();
				$("#workforce12").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide12 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide12 .rotating-copy.mobile');
				}
				
				slickSpeed($slick, true);
			}
			
		}
	});
	
	// map_animation.staggerFrom(bubbles, 0.5, {
	// 	opacity: 0,
	// 	scale: 0.8,
	// 	transformOrigin:'center',
	// 	ease: Elastic.easeOut.config(1, 0.3)
	// }, 0.3);

	objectFitVideos();


});