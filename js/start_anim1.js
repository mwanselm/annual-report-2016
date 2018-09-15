jQuery('#carousel').on('cycle-initialized',function(event, optionHash){
    //$('.cycle-slide-active').prev().addClass('initial');
    $('.cycle-prev').addClass('initial');
    $('.cycle-carousel-wrap').css('left','406px');
});

jQuery('#carousel').on('cycle-after',function(){
    $('.cycle-slide, .cycle-prev').removeClass('initial');
});

jQuery(document).ready(function(){
  
  var wWidth = $(window).width();
  
  if ( wWidth < 1217 ) {
    //$(".dummy").remove();
    $('#carousel').cycle();
  }
  else {
    $('#carousel').cycle();
    $('.cycle-carousel-wrap').css('left','406px');
  }
      
  function reinit_cycle() {
          var wWidth = $(window).width();
          if ( wWidth < 1217 ) {
              console.log( 'Resized and mobile ' + $(window).width() );
               $('#carousel').cycle('destroy');
              reinitCycle(1);
            }
          else {
              console.log( 'Resized and big ' + $(window).width() );
              $('#carousel').cycle('destroy');
              reinitCycle(3);
          }
  }
  
  function reinitCycle(visibleSlides) {
          console.log(visibleSlides);
          var wWidth = $(window).width();
          if ( wWidth < 1217 ) {
            $(".dummy").remove();
          }
          $('#carousel').cycle({
              fx: 'carousel',
              slides: '> div.circle-wrap',
              timeout: 0,
              carouselVisible: visibleSlides,
              carouselFluid: true,
              startingSlide: 0,
              allowWrap: false         
          });        
          if ( wWidth > 1217 ) {
            $('.cycle-carousel-wrap').css('left','406px');
          }
   
  }
  
  var reinitTimer;
  
  $(window).resize(function() {
          clearTimeout(reinitTimer);
          reinitTimer = setTimeout(reinit_cycle, 200);
  });
  
});
