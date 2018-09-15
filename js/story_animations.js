$(function () {

	function slickSpeed(el, init){
		var speed = 0;

		if(init){
			speed = el.find('.slide-init').data('time');
		}
		el.slick("slickSetOption", "autoplaySpeed", speed);
		el.slick("slickGoTo",0,false);
		el.slick('slickPlay').on("afterChange", function(e, slick) {
            		speed = el.find('div[data-slick-index="'+ slick.currentSlide + '"]').data("time");
            		el.slick("slickSetOption", "autoplaySpeed", speed);
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
				$("#jonathon2").get(0).play();
				$('.slide2 .rotating-copy').slick('slickPlay');
			}
			if ( (index == 2 && direction =='down') || (index == 4 && direction =='up'))  {
				$("#jonathon3").get(0).load();
				$("#jonathon3").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide3 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide3 .rotating-copy.mobile');
				}
				slickSpeed($slick, true);
			}
			if ( (index == 3 && direction =='down') || (index == 5 && direction =='up'))  {
				$("#jonathon4").get(0).load();
				$("#jonathon4").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide4 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide4 .rotating-copy.mobile');
				}
				slickSpeed($slick, true);
				console.log('triggered');
			}
			if ( (index == 4 && direction =='down') || (index == 6 && direction =='up'))  {
				$("#jonathon5").get(0).load();
				$("#jonathon5").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide5 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide5 .rotating-copy.mobile');
				}
				slickSpeed($slick, true);
			}
			if ( (index == 5 && direction =='down') || (index == 7 && direction =='up'))  {
				$("#jonathon6").get(0).load();
				$("#jonathon6").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide6 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide6 .rotating-copy.mobile');
				}
				slickSpeed($slick, true);
			}
			if ( (index == 6 && direction =='down') || (index == 8 && direction =='up')){
				var map_master = new TimelineMax({delay:0.5});
				var bubble1 = new TimelineMax();
				var bubble2 = new TimelineMax();
				var bubble3 = new TimelineMax();
				var bubble4 = new TimelineMax();
				var timelines = [bubble1, bubble2, bubble3, bubble4];
				for(var i = 0; i < timelines.length; i++){
					timelines[i].from($(".icon" + (i+1)), 0.5, {
					opacity: 0,
					scale: 0.8,
					transformOrigin:'center',
					ease: Elastic.easeOut.config(1, 0.3)

					}).from($(".text" + (i+1)), 0.3, {
						opacity: 0
					}, "-=0.2");
				}

				map_master.add(bubble1).add(bubble2, 0.3).add(bubble3, 0.6).add(bubble4, 0.9);
			}
			if ( (index == 7 && direction =='down') || (index == 9 && direction =='up'))  {
				$("#jonathon8").get(0).load();
				$("#jonathon8").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide8 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide8 .rotating-copy.mobile');
				}
				slickSpeed($slick, true);
			}
			if ( (index == 8 && direction =='down') || (index == 10 && direction =='up'))  {
				$("#jonathon9").get(0).load();
				$("#jonathon9").get(0).play();
				if($(window).width() > 1024){
					var $slick = $('.slide9 .rotating-copy.desktop');
				}
				else{
					var $slick = $('.slide9 .rotating-copy.mobile');
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