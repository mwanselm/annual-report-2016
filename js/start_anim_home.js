
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var canvas1, canvas2, canvas22, canvas3, canvas4, canvas5, canvas6;
var stage1, stage2, stage22, stage3, stage4, stage5, stage6;
var anim_container1, anim_container2, anim_container22,  anim_container3, anim_container4, anim_container5, anim_container6;
var dom_overlay_container1, dom_overlay_container2, dom_overlay_container22,  dom_overlay_container3, dom_overlay_container4, dom_overlay_container5, dom_overlay_container6;

function init1() {
	canvas1 = document.getElementById("canvas1");
	anim_container1 = document.getElementById("animation_container1");
	dom_overlay_container1 = document.getElementById("dom_overlay_container1");
	handleComplete1();
}

function handleComplete1() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new andthrive_sym.and_thrive();
	stage1 = new createjs.Stage(canvas1);
	stage1.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation1 = function() {
		createjs.Ticker.setFPS(andthrive_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage1);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive1(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas1);		
		resizeCanvas1();		
		function resizeCanvas1() {			
			var w = andthrive_sym.properties.width, h = andthrive_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas1.width = w*pRatio*sRatio;			
			canvas1.height = h*pRatio*sRatio;
			canvas1.style.width = dom_overlay_container1.style.width = anim_container1.style.width =  w*sRatio+'px';				
			canvas1.style.height = anim_container1.style.height = dom_overlay_container1.style.height = h*sRatio+'px';
			stage1.scaleX = pRatio*sRatio;			
			stage1.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive1(false,'both',false,1);	
	fnStartAnimation1();
}


function init2() {
	canvas2 = document.getElementById("canvas2");
	anim_container2 = document.getElementById("animation_container2");
	dom_overlay_container2 = document.getElementById("dom_overlay_container2");
	handleComplete2();
}
function handleComplete2() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new controlmyfuture_sym.control_my_future();
	stage2 = new createjs.Stage(canvas2);
	stage2.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation2 = function() {
		createjs.Ticker.setFPS(controlmyfuture_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage2);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive2(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas2);		
		resizeCanvas2();		
		function resizeCanvas2() {			
			var w = controlmyfuture_sym.properties.width, h = controlmyfuture_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas2.width = w*pRatio*sRatio;			
			canvas2.height = h*pRatio*sRatio;
			canvas2.style.width = dom_overlay_container2.style.width = anim_container2.style.width =  w*sRatio+'px';				
			canvas2.style.height = anim_container2.style.height = dom_overlay_container2.style.height = h*sRatio+'px';
			stage2.scaleX = pRatio*sRatio;			
			stage2.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive2(false,'both',false,1);	
	fnStartAnimation2();
}


function init3() {
	canvas3 = document.getElementById("canvas3");
	anim_container3 = document.getElementById("animation_container3");
	dom_overlay_container3 = document.getElementById("dom_overlay_container3");
	handleComplete3();
}
function handleComplete3() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new unexpected_sym.for_the_unexpected();
	stage3 = new createjs.Stage(canvas3);
	stage3.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation3 = function() {
		createjs.Ticker.setFPS(unexpected_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage3);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive3(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas3);		
		resizeCanvas3();		
		function resizeCanvas3() {			
			var w = unexpected_sym.properties.width, h = unexpected_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas3.width = w*pRatio*sRatio;			
			canvas3.height = h*pRatio*sRatio;
			canvas3.style.width = dom_overlay_container3.style.width = anim_container3.style.width =  w*sRatio+'px';				
			canvas3.style.height = anim_container3.style.height = dom_overlay_container3.style.height = h*sRatio+'px';
			stage3.scaleX = pRatio*sRatio;			
			stage3.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive3(false,'both',false,1);	
	fnStartAnimation3();
}

function init4() {
	canvas4 = document.getElementById("canvas4");
	anim_container4 = document.getElementById("animation_container4");
	dom_overlay_container4 = document.getElementById("dom_overlay_container4");
	handleComplete4();
}

function handleComplete4() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new unexpected_sym.for_the_unexpected();
	stage4 = new createjs.Stage(canvas4);
	stage4.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation4 = function() {
		createjs.Ticker.setFPS(unexpected_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage4);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive4(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas4);		
		resizeCanvas4();		
		function resizeCanvas4() {			
			var w = unexpected_sym.properties.width, h = unexpected_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas4.width = w*pRatio*sRatio;			
			canvas4.height = h*pRatio*sRatio;
			canvas4.style.width = dom_overlay_container4.style.width = anim_container4.style.width =  w*sRatio+'px';				
			canvas4.style.height = anim_container4.style.height = dom_overlay_container4.style.height = h*sRatio+'px';
			stage4.scaleX = pRatio*sRatio;			
			stage4.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive4(false,'both',false,1);	
	fnStartAnimation4();
}

function init5() {
	canvas5 = document.getElementById("canvas5");
	anim_container5 = document.getElementById("animation_container5");
	dom_overlay_container5 = document.getElementById("dom_overlay_container5");
	handleComplete5();
}

function handleComplete5() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new andthrive_sym.and_thrive();
	stage5 = new createjs.Stage(canvas5);
	stage5.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation5 = function() {
		createjs.Ticker.setFPS(andthrive_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage5);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive5(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas5);		
		resizeCanvas5();		
		function resizeCanvas5() {			
			var w = andthrive_sym.properties.width, h = andthrive_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas5.width = w*pRatio*sRatio;			
			canvas5.height = h*pRatio*sRatio;
			canvas5.style.width = dom_overlay_container5.style.width = anim_container5.style.width =  w*sRatio+'px';				
			canvas5.style.height = anim_container5.style.height = dom_overlay_container5.style.height = h*sRatio+'px';
			stage5.scaleX = pRatio*sRatio;			
			stage5.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive5(false,'both',false,1);	
	fnStartAnimation5();
}

function init6() {
	canvas6 = document.getElementById("canvas6");
	anim_container6 = document.getElementById("animation_container6");
	dom_overlay_container6 = document.getElementById("dom_overlay_container6");
	handleComplete6();
}

function handleComplete6() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new controlmyfuture_sym.control_my_future();
	stage6 = new createjs.Stage(canvas6);
	stage6.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation6 = function() {
		createjs.Ticker.setFPS(controlmyfuture_sym.properties.fps);
		createjs.Ticker.addEventListener("tick", stage6);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive6(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas6);		
		resizeCanvas6();		
		function resizeCanvas6() {			
			var w = controlmyfuture_sym.properties.width, h = controlmyfuture_sym.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas6.width = w*pRatio*sRatio;			
			canvas6.height = h*pRatio*sRatio;
			canvas6.style.width = dom_overlay_container6.style.width = anim_container6.style.width =  w*sRatio+'px';				
			canvas6.style.height = anim_container6.style.height = dom_overlay_container6.style.height = h*sRatio+'px';
			stage6.scaleX = pRatio*sRatio;			
			stage6.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive6(false,'both',false,1);	
	fnStartAnimation6();
}




jQuery(document).ready(function(){
  if (getMobileOperatingSystem() == "Android"){
    $.getScript( "js/control_my_future_24fps.js").done(function( script, textStatus ) {
      $.getScript( "js/and_thrive_24fps.js").done(function( script, textStatus ) {
        $.getScript( "js/for_the_unexpected_24fps.js").done(function( script, textStatus) {
          
          init1();
          init2();
          init3();
          init4();
          init5();
          init6();
        });
      });
    });
    
 
  }else{
    $.getScript( "js/control_my_future.js").done(function( script, textStatus ) {
      $.getScript( "js/and_thrive.js").done(function( script, textStatus ) {
        $.getScript( "js/for_the_unexpected.js").done(function( script, textStatus) {
          init1();
          init2();
          init3();
          init4();
          init5();
          init6();
        });
      });
    });
    
  }
  
  
  
});
