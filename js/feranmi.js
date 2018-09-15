

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
  
	$('.feranmi .story-slider').fullpage({
		//		paddingTop: '83px',
		scrollOverflow: true,
		controlArrows: true,
		//		slidesNavigation: true,
		onLeave: function(index, nextIndex, direction){

      if (nextIndex == 1){
        $('.story-nav').addClass('hidden_arrow');
      }
	            var leavingSection = $(this);
 				if (index && direction == 'down') {
					$('body').addClass('nav-hide').removeClass('nav-reveal');
					$("#story-next div").removeClass("bounce delayed").delay(15000).queue(function () {
						$(this).addClass("bounce delayed").dequeue();
					});
				}
				if(index && direction =='up'){
					$('body').addClass('nav-reveal').removeClass('nav-hide');
				}
			
//				Catch Phrase
				if ( (index == 1 && direction =='down') || (index == 3 && direction =='up'))  {
          // $("#feranmi1").get(0).play();
					$('.slide2 .rotating-copy').slick('slickPlay');
				}
			
//				Third Year 1
				if ( (index == 2 && direction =='down') || (index == 4 && direction =='up'))  {
					$("#feranmi2").get(0).load();
					$("#feranmi2").get(0).play();
					if($(window).width() > 1024){
						var $slick = $('.slide3 .rotating-copy.desktop');
					}
					else{
						var $slick = $('.slide3 .rotating-copy.mobile');
					}
					
					slickSpeed($slick, true);
				}
			

			
//				Third Year 2
				if ( (index == 3 && direction =='down') || (index == 5 && direction =='up'))  {
					$("#feranmi3").get(0).play();
					$('.slide4 .rotating-copy').slick('slickPlay');
				}
			
//				Laura 1
				if ( (index == 4 && direction =='down') || (index == 6 && direction =='up'))  {
					$("#feranmi4").get(0).load();
					$("#feranmi4").get(0).play();
          
					if($(window).width() > 1024){
						var $slick = $('.slide5 .rotating-copy.desktop');
					}
					else{
						var $slick = $('.slide5 .rotating-copy.mobile');
					}
					slickSpeed($slick, true);
				}
			
//				Rehab
				if ( (index == 8 && direction =='down') || (index == 10 && direction =='up'))  {

          $("#feranmi5_01").prop("volume", 0);
          $("#feranmi5_02").prop("volume", 0);
          $("#feranmi5_03").prop("volume", 0);
          
					$("#feranmi6").get(0).load();
					$("#feranmi6").get(0).play();
					if($(window).width() > 1024){
						var $slick = $('.slide9 .rotating-copy.desktop');
					}
					else{
						var $slick = $('.slide9 .rotating-copy.mobile');
					}
					slickSpeed($slick, true);
					
				}
			
//				Laura 2
				if ( (index == 9 && direction =='down') || (index == 11 && direction =='up'))  {
                    
					$("#feranmi7").get(0).load();
					$("#feranmi7").get(0).play();
					if($(window).width() > 1024){
						var $slick = $('.slide10 .rotating-copy.desktop');
					}
					else{
						var $slick = $('.slide10 .rotating-copy.mobile');
					}
					slickSpeed($slick, true);
				}
			
//				Pete
				if ( (index == 13 && direction =='down') || (index == 18 && direction =='up'))  {
          
            $('video').each(function () {
                video = $('#' + $(this).attr('id'));
                this_video = video.get(0);
                this_video.pause();
            });
          
            $("#feranmi13").prop("volume", 0);
            $("#feranmi14").prop("volume", 0);
            $("#feranmi15").prop("volume", 0);
            $("#feranmi16").prop("volume", 0);
            
            $("#feranmi17").get(0).load();
					  $("#feranmi17").get(0).play();
					  if($(window).width() > 1024){
					  	var $slick = $('.slide12 .rotating-copy.desktop');
					  }
					  else{
					  	var $slick = $('.slide12 .rotating-copy.mobile');
					  }
					  slickSpeed($slick, true);
				}
        
				if ( (index == 15 && direction =='down') || (index == 15 && direction =='up'))  {
					$('.slide12 .rotating-copy').slick('slickPause');
				}
        
			
//				And Although
				if ( (index == 15 && direction =='down') || (index == 17 && direction =='up'))  {
					$("#feranmi18").get(0).load();
					$("#feranmi18").get(0).play();
					if($(window).width() > 1024){
						var $slick = $('.slide13 .rotating-copy.desktop');
					}
					else{
						var $slick = $('.slide13 .rotating-copy.mobile');
					}
					slickSpeed($slick, true);
				}
			
////				Disability
//				if ( (index == 17 && direction =='down') || (index == 19 && direction =='up'))  {
//					$("#feranmi19").get(0).play();
//				}
//				
//
//				if(index == 2 && direction =='down'){
//					$("#feranmi1").get(0).pause();
//					$("#feranmi2").get(0).play();
//					$('.slick-slide3.desktop').slick('slickPlay');
//
//				}
//			
//				if(index == 3 && direction =='up'){
//					$('.slick-slide3.desktop').slick('slickPause');
//				}	
//			
//				if(index == 3 && direction =='down'){
//					$("#feranmi2").get(0).pause();
//					$("#feranmi3").get(0).play();
//
//				}
	            if(index == 5 && direction =='down'){
                
	            	var master1 = new TimelineMax();
	            	var circle1 = new TimelineMax();
	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_start .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
                  $("#feranmi5_01").get(0).play();
                  
	            		circles = ["#journey_start .circle1", "#journey_start .circle2", "#journey_start .circle3"];
	            		delay = "-=1";
	            	}
	            	circle1.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL1 = new TimelineMax();
	            	videoTL1.from($("#journey_start .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_start .line"), 0.5, {
	            		left: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_start .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi5_01").get(0).play();
	            		}
	            	}, "-=0.2");
	            	master1.add(circle1).add(videoTL1, "-=0.7");
	            }

	            if(index == 6 && direction =='down'){
	            	$("#feranmi5_01").get(0).pause();
	            	var master2 = new TimelineMax();
	            	var circle2 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_start2 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
            			$("#feranmi5_02").get(0).play();
                  
	            		circles = ["#journey_start2 .circle9", "#journey_start2 .circle10", "#journey_start2 .circle11"];
	            		delay = "-=1";
	            	}
	            	
	            	circle2.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL2 = new TimelineMax();
	            	videoTL2.from($("#journey_start2 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_start2 .line"), 0.5, {
	            		right: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_start2 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi5_02").get(0).play();
	            		}
	            	}, "-=0.2");
	            	master2.add(circle2).add(videoTL2, "-=0.7");
	            }

	            if(index == 7 && direction =='down'){
	            	$("#feranmi5_02").get(0).pause();
	            	var master3 = new TimelineMax();
	            	var circle3 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_start3 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
                  $("#feranmi5_03").get(0).play();
	            		circles = ["#journey_start3 .circle17", "#journey_start3 .circle18", "#journey_start3 .circle19"];
	            		delay = "-=1";
	            	}

	            	circle3.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL3 = new TimelineMax();
	            	videoTL3.from($("#journey_start3 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_start3 .line"), 0.5, {
	            		left: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_start3 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi5_03").get(0).play();
	            		}
	            	}, delay);
	            	master3.add(circle3).add(videoTL3, "-=0.7");
	            }
	            if(index == 8 && direction =='down'){
	            		$("#feranmi5_03").get(0).pause();
	            }

	            if(index == 10 && direction =='down'){
	            	$("#feranmi5_02").get(0).pause();
	            	var master3 = new TimelineMax();
	            	var circle3 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_continues2 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
                  $("#feranmi14").get(0).play();
	            		circles = ["#journey_continues2 .circle9", "#journey_continues2 .circle10", "#journey_continues2 .circle11"];
	            		delay = "-=1";
	            	}

	            	circle3.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL3 = new TimelineMax();
	            	videoTL3.from($("#journey_continues2 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_continues2 .line"), 0.5, {
	            		right: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_continues2 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi14").get(0).play();
	            		}
	            	}, delay);
	            	master3.add(circle3).add(videoTL3, "-=0.7");
	            }

	            if(index == 11 && direction =='down'){
	            	$("#feranmi14").get(0).pause();
	            	var master3 = new TimelineMax();
	            	var circle3 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_continues3 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
                  $("#feranmi13").get(0).play();
	            		circles = ["#journey_continues3 .circle1", "#journey_continues3 .circle2", "#journey_continues3 .circle3"];
	            		delay = "-=1";
	            	}

	            	circle3.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL3 = new TimelineMax();
	            	videoTL3.from($("#journey_continues3 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_continues3 .line"), 0.5, {
	            		left: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_continues3 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi13").get(0).play();
	            		}
	            	},delay);
	            	master3.add(circle3).add(videoTL3, "-=0.7");
	            }

	            if(index == 12 && direction =='down'){
	            	$("#feranmi13").get(0).pause();
	            	var master3 = new TimelineMax();
	            	var circle3 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_continues4 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
                  $("#feranmi15").get(0).play();
	            		circles = ["#journey_continues4 .circle9", "#journey_continues4 .circle10", "#journey_continues4 .circle11"];
	            		delay = "-=1";
	            	}

	            	circle3.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL3 = new TimelineMax();
	            	videoTL3.from($("#journey_continues4 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_continues4 .line"), 0.5, {
	            		right: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_continues4 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi15").get(0).play();
	            			
	            		}
	            	}, delay);
	            	master3.add(circle3).add(videoTL3, "-=0.7");
	            }

	            if(index == 13 && direction =='down'){
	            	$("#feranmi15").get(0).pause();
	            	var master3 = new TimelineMax();
	            	var circle3 = new TimelineMax();

	            	var circles = "";
	            	var delay = "";
	            	if($(window).width() > 767){
	            		circles = "#journey_continues5 .circle";
	            		delay = "-=0.2";
	            	}
	            	else{
            			$("#feranmi16").get(0).play();
                  
	            		circles = ["#journey_continues5 .circle17", "#journey_continues5 .circle18", "#journey_continues5 .circle19"];
	            		delay = "-=1";
	            	}

	            	circle3.staggerFrom(circles, 0.4, {
	            		opacity:0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		delay: 0.3,
	            		ease: Elastic.easeOut.config(1, 0.3)
	            	}, 0.2);
	            	var videoTL3 = new TimelineMax();
	            	videoTL3.from($("#journey_continues5 .inner-circle"), 0.5, {
	            		opacity: 0,
	            		scale: 0.5,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}).from($("#journey_continues5 .line--bottom"), 0.5, {
	            		bottom: 0,
	            		ease: Elastic.easeOut.config(1, 0.3),
	            	}, "-=0.2").from($("#journey_continues5 .timeline-item"), 0.8, {
	            		opacity: 0,
	            		scale: 0.8,
	            		transformOrigin:'center',
	            		ease: Elastic.easeOut.config(1, 0.3),
	            		onComplete: function(){
	            			$("#feranmi16").get(0).play();
	            		}
	            	}, delay);
	            	master3.add(circle3).add(videoTL3, "-=0.7");
	            }

	            if(index == 14 && direction =='down'){
	            		$("#feranmi16").get(0).pause();
	            }


	        }

	});



objectFitVideos();

});

