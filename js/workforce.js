$(function () {
	$('.story-slider.workforce').fullpage({
		//		paddingTop: '83px',
		scrollOverflow: true,
		controlArrows: true,
		//		slidesNavigation: true,
		onLeave: function(index, nextIndex, direction){
	            var leavingSection = $(this);

////				Catch Phrase
//				if ( (index == 1 && direction =='down') || (index == 3 && direction =='up'))  {
//					$("#feranmi1").get(0).play();
//					$('.slide2 .rotating-copy').slick('slickPlay');
//				}
//			
////				Third Year 1
//				if ( (index == 2 && direction =='down') || (index == 4 && direction =='up'))  {
//					$("#feranmi2").get(0).play();
//					$('.slide3 .rotating-copy').slick('slickPlay');
//				}
//			
////				Third Year 2
//				if ( (index == 3 && direction =='down') || (index == 5 && direction =='up'))  {
//					$("#feranmi3").get(0).play();
////					$('.slide4 .rotating-copy').slick('slickPlay');
//				}
//			
////				Laura 1
//				if ( (index == 4 && direction =='down') || (index == 6 && direction =='up'))  {
//					$("#feranmi4").get(0).play();
////					$('.slide5 .rotating-copy').slick('slickPlay');
//				}
//			
////				Rehab
//				if ( (index == 8 && direction =='down') || (index == 10 && direction =='up'))  {
//					$("#feranmi6").get(0).play();
//				}
//			
////				Laura 2
//				if ( (index == 9 && direction =='down') || (index == 11 && direction =='up'))  {
//					$("#feranmi7").get(0).play();
//				}
//			
////				Pete
//				if ( (index == 15 && direction =='down') || (index == 17 && direction =='up'))  {
//					$("#feranmi17").get(0).play();
//				}
//			
////				And Although
//				if ( (index == 16 && direction =='down') || (index == 18 && direction =='up'))  {
//					$("#feranmi18").get(0).play();
//				}
//			
////				Disability
//				if ( (index == 17 && direction =='down') || (index == 19 && direction =='up'))  {
//					$("#feranmi19").get(0).play();
//				}
////				
////
////				if(index == 2 && direction =='down'){
////					$("#feranmi1").get(0).pause();
////					$("#feranmi2").get(0).play();
////					$('.slick-slide3.desktop').slick('slickPlay');
////
////				}
////			
////				if(index == 3 && direction =='up'){
////					$('.slick-slide3.desktop').slick('slickPause');
////				}	
////			
////				if(index == 3 && direction =='down'){
////					$("#feranmi2").get(0).pause();
////					$("#feranmi3").get(0).play();
////
////				}
	           

	        }

	});

});

