$(function () {
	
//	Video Inline 

  $('video').each(function () {
      video = $('#' + $(this).attr('id'));
      this_video = video.get(0);
      makeVideoPlayableInline(this_video,true);  
  });
  
  $('#tts').click(function(){
    $("video").prop("volume", 0.99);
  })
    
    $('#story-top, #top').click(function() {
        location.reload();
    });

	//	$('#nav-modal').modal({
	//		clickClose: false
	//	});
	$('a[href="#nav-modal"]').click(function (event) {
		event.preventDefault();
		$(this).modal({
			escapeClose: false,
			clickClose: false
		});
	});
	
	//	Navigation Flyout 

	$('#nav-modal > ul > li a').hover(function () {
		$('.hover-option').removeClass('shown');
	});
	$('a#hover1').hover(function () {
		// fade in the div in this object.
		$('#hover-content-1').addClass('shown').removeClass('hidden');
	});
	$('a#hover2').hover(function () {
		// fade in the div in this object.
		$('#hover-content-2').addClass('shown').removeClass('hidden');
	});
	$('a#hover3').hover(function () {
		// fade in the div in this object.
		$('#hover-content-3').addClass('shown').removeClass('hidden');
	});
	$('a#hover4').hover(function () {
		// fade in the div in this object.
		$('#hover-content-4').addClass('shown').removeClass('hidden');
	});
	$('a#hover5').hover(function () {
		// fade in the div in this object.
		$('#hover-content-5').addClass('shown').removeClass('hidden');
	});
	$('a#hover6').hover(function () {
		// fade in the div in this object.
		$('#hover-content-6').addClass('shown').removeClass('hidden');
	});
	$('a#hover7').hover(function () {
		// fade in the div in this object.
		$('#hover-content-7').addClass('shown').removeClass('hidden');
	});
	$('a#hover8').hover(function () {
		// fade in the div in this object.
		$('#hover-content-8').addClass('shown').removeClass('hidden');
	});

	//	Hero Hover 

	$('.home-story').hover(function () {
		$('.home-hero').removeClass('slide2 slide3 slide4');
		$('.home-story-link').removeClass('shown');
		$('.home-story-copy').removeClass('vanish');
	});

  function resetHome(){
		$('.home-hero').removeClass('slide2 slide3 slide4');
		$('.home-story-link').removeClass('shown');
		$('.home-story-copy').removeClass('vanish');
  }
  
	$('#story1').hover(function () {
		$('#story1 .home-story-copy').addClass('vanish');
		$('.home-hero').addClass('slide2');
		$('#story1 .home-story-link').addClass('shown');
	},function(){
		resetHome();
  });

	$('#story2').hover(function () {
		$('#story2 .home-story-copy').addClass('vanish');
		$('.home-hero').addClass('slide3');
		$('#story2 .home-story-link').addClass('shown');
	},function(){
		resetHome();
  });

	$('#story3').hover(function () {
		$('#story3 .home-story-copy').addClass('vanish');
		$('.home-hero').addClass('slide4');
		$('#story3 .home-story-link').addClass('shown');
	},function(){
		resetHome();
  });

	$('.trigger').on('click', function (e) {
		e.preventDefault();
		$(this).parent().parent().toggleClass('open');
		$('body').scrollTo(this);
	});

  

});

$(document).ready(function () {
	//	$('.story-slider').css('height', $(window).height() + 'px');
	//	$('.story-slider').slick({
	//		infinite: false,
	//		dots: false,
	//		mobileFirst: true,
	//		vertical: true,
	//		draggable: false
	//	});
  
	$('.social-sharing a').on('click', function (e) {
		e.preventDefault();
    e.stopPropagation();
		$('.addthis_inline_share_toolbox').toggleClass('open');
	});
  


  $(document).on('click', function (e) {
   $('.addthis_inline_share_toolbox').removeClass('open');
  });
  
  $(".at-share-btn").on('click', function (e) {
   $('.addthis_inline_share_toolbox').removeClass('open');
  });
  


	$("#video-mute").click(function () {
		if ($("video").prop('muted')) {
			$("video").prop('muted', false);
			$(this).addClass('unmute-video'); 
      $(this).find('image').attr('xlink:href','data:image/png;base64,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');
      
		} else {
			$("video").prop('muted', true);
			$(this).removeClass('unmute-video');
      
     $(this).find('image').attr('xlink:href','data:image/svg+xml;base64,PHN2ZyBpZD0iNzhjMjcwYzYtNDUzMi00YTdmLTk3OTMtMTZiMDA2Mjk2MDViIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk5IDk5Ij48ZGVmcz48c3R5bGU+LlwzOSA1NTgxNmYzLTNmYjctNDU1ZC05MDgzLWFhOTczOWZiZWI5ZntmaWxsOiMzNjM3NDA7b3BhY2l0eTowLjI7fS5cMzIgNTgxNTAwNS1mNWFmLTQ3ZTQtODcwZi05NDI1ZWIzMjdlNTQsLlwzOSA1NTgxNmYzLTNmYjctNDU1ZC05MDgzLWFhOTczOWZiZWI5Zntpc29sYXRpb246aXNvbGF0ZTt9LlwzMiA1ODE1MDA1LWY1YWYtNDdlNC04NzBmLTk0MjVlYjMyN2U1NHtmaWxsOiNmZmY7b3BhY2l0eTowLjQ3O30uXDM4IDdiNmEyOTItODFlMi00YTQ5LTlkMmUtMzczYzAwZDU4ZTgye2ZpbGw6I2VhZWFlYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm11dGVfaWNvbjwvdGl0bGU+PGcgaWQ9IjIxNWZjYmZlLWRlYjktNGM2Ny04OWI5LTJkMTNhMDliOWM2MyIgZGF0YS1uYW1lPSJHcm91cCAxIGNvcHkiPjxwYXRoIGlkPSI4Y2VmOGViMi1kNjM5LTQzZjgtODBmMi1jMTJlYmQ1MDMyOTYiIGRhdGEtbmFtZT0iUm91bmRlZCBSZWN0YW5nbGUgMyIgY2xhc3M9Ijk1NTgxNmYzLTNmYjctNDU1ZC05MDgzLWFhOTczOWZiZWI5ZiIgZD0iTTEwLDBIODlBMTAsMTAsMCwwLDEsOTksMTBWODlBMTAsMTAsMCwwLDEsODksOTlIMTBBMTAsMTAsMCwwLDEsMCw4OVYxMEExMCwxMCwwLDAsMSwxMCwwWiIvPjxwYXRoIGNsYXNzPSIyNTgxNTAwNS1mNWFmLTQ3ZTQtODcwZi05NDI1ZWIzMjdlNTQiIGQ9Ik0zMC42LDYwLjFIMjQuNUE3LjQ3LDcuNDcsMCwwLDEsMTcsNTIuN1Y1MC41YTcuNDcsNy40NywwLDAsMSw3LjMtNy42aDYuM0w1MC43LDMwLjJWNzIuOFoiLz48cG9seWdvbiBjbGFzcz0iODdiNmEyOTItODFlMi00YTQ5LTlkMmUtMzczYzAwZDU4ZTgyIiBwb2ludHM9IjgwIDQzIDc4IDQxIDY5LjUgNDkuNSA2MSA0MSA1OSA0MyA2Ny41IDUxLjUgNTkgNjAgNjEgNjIgNjkuNSA1My41IDc4IDYyIDgwIDYwIDcxLjUgNTEuNSA4MCA0MyIvPjwvZz48L3N2Zz4='); 
		}
		console.log($("video").prop('muted'))
	});
	
//	$('.bg-video-text.rotating-copy').slick({
//		dots: false,
//		arrows: false,
//		vertical: true,
//		draggable: false,					
//		infinite: false,
////		autoplay: true
//	});
	
	
	var sliderMobileBG = $('.bg-video-text.rotating-copy.mobile').slick({
		dots: false,
		arrows: false,
		vertical: true,
		draggable: false,
		pauseOnHover: false,
//		autoplay: true,
		mobileFirst: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 769,
				settings: "unslick",
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});
	sliderMobileBG.on('afterChange', function(event, slick, currentSlide){
	  // slick - is a slider object with a lot of useful info
	  // currentSlide - is a current slide index (starts from 0)
	  if( slick.slideCount === currentSlide + 1 ){
		slick.paused = true;
	  }
	});
	var sliderDesktopBG = $('.bg-video-text.rotating-copy.desktop').slick({
		dots: false,
		arrows: false,
		vertical: true,
		draggable: false,
		infinite: false,
		autoplaySpeed: 4500,
		pauseOnHover: false,
//		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: "unslick",
			}
		  ]
	});

	sliderDesktopBG.on('afterChange', function(event, slick, currentSlide){
	  // slick - is a slider object with a lot of useful info
	  // currentSlide - is a current slide index (starts from 0)
	  if( slick.slideCount === currentSlide + 1 ){
		slick.paused = true;
	  }
	});


	var sliderHeadMobile = $('.talking-head .rotating-copy.mobile').slick({
		dots: false,
		arrows: false,
		vertical: true,
		draggable: false,
		pauseOnHover: false,
//		autoplay: true,
		mobileFirst: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 769,
				settings: "unslick",
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});

	sliderHeadMobile.on('afterChange', function(event, slick, currentSlide){
	  // slick - is a slider object with a lot of useful info
	  // currentSlide - is a current slide index (starts from 0)
	  if( slick.slideCount === currentSlide + 1 ){
	  	// slick.slickGoTo(0, true);
		slick.paused = true;
	  }
	});

	var sliderDesktopHead = $('.talking-head .rotating-copy.desktop').slick({
		dots: false,
		arrows: false,
		vertical: true,
		draggable: false,
		infinite: false,
		autoplaySpeed: 4500,
		pauseOnHover: false,
//		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: "unslick",
			}
		  ]
	});
	// Here is most important part of the code which actually stops the slider
	sliderDesktopHead.on('afterChange', function(event, slick, currentSlide){
	  // slick - is a slider object with a lot of useful info
	  // currentSlide - is a current slide index (starts from 0)
	  if( slick.slideCount === currentSlide + 1 ){
		slick.paused = true;
	  }
	});
  
  $('.story-nav').addClass('hidden_arrow');

  if(getMobileOperatingSystem() == "Android"){
    $("video").each(function(){
      android_source = $(this).data("android-src");
      if (android_source !== undefined){
        $(this).attr('src',android_source);
      }
    });
  }

});

//adding the action to the button
$(document).on('click', '#story-prev', function () {
	$.fn.fullpage.moveSectionUp();
});
$(document).on('click', '#story-next, #tts, #start', function () {
  $('.story-nav').removeClass('hidden_arrow');
	$.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#tts', function () {
	if ($("video").prop('muted')) {
		$("video").prop('muted', false);
		$("video").prop('muted', true);
  }else{
		$("video").prop('muted', true);
		$("video").prop('muted', false);
  }
    
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}