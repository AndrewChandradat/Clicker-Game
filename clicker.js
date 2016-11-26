
$(document).ready(function(){	
	
	var base_level = 0;
	
	//the original button
	var disableClick = false; //used to determine if clicks need to be disabled for whatever reason.
	var circleD = $("#circle").height(); //diameter of circle
	var initCircleD = circleD;
	var diamInc = 100; //amount the diameter of the circle increases when clicked.
	$("#circle").css("width", circleD);
	
	//the outline
	var barrierD = $("#barrier").height();
	$("#barrier").css("width", barrierD );
	var imageBarrierD = barrierD / 4;
	
	var mainButtonColor = "red";
	var secondaryButtonColor = "blue";
	var mainBarrierColor = "brown";
	
	$("#instructions").html( build_base );
	
	//debug info
	var counter = 0; //number of clicks
	setInterval(function(){
		$("#counter").html(counter);
		$("#circleheight").html(circleD);
		$("#barrierheight").html(barrierD);		
		$("#imaginebarrierheight").html(imageBarrierD);
		$("#base_debug").html(base_level);		
	}, 100);
	
	function increaseRadius( circle ){
		circleD += diamInc;
		circle.css( "height", circleD );
		circle.css( "width", circleD );
	} 
	
	function decreaseRadius( circle){
		circleD -= diamInc / 2;
		circle.css( "height", circleD );
		circle.css( "width", circleD );
	} 
	
	
	
	function resetCircle( circle, initialD, mainColor, secondColor ){
		//freeze circle
		disableClick = true;
		circle.css( "background-color", secondColor);
		
		circle.css( "transition", "width 2s, height 2s");
		circle.css( "height", initialD);
		circle.css( "width", initialD );		
		
		setTimeout( function(){ 
			circle.css( "transition", "initial") 
			//unfreeze circle
			disableClick = false;
			circle.css("background-color", mainColor);
		}, 2000);	
	}
	
	function scoutArea( circle, initial D ){
		disableClick = true;
		
		circle.css( "transition", "width 2s, height 2s, transform 2s");
		circle.css( "height", initialD);
		circle.css( "width", initialD );
		$("#circle").css( "transform", "translate(100%, -60%)")
		
		setTimeout( function(){ 
			circle.css( "transition", "initial") 
			//unfreeze circle
			disableClick = false;
		}, 2000);
	}
	
	
	$("#circle").click(function(){
		if( !disableClick ){
			
			increaseRadius( $("#circle") );
			//is this seriously the only way this works?
			setTimeout( function(){ decreaseRadius( $("#circle") )}, 100 );
			
			if( circleD > imageBarrierD ){
				if( base_level == 0 ){
					
					resetCircle( $("#circle"), initCircleD, mainButtonColor, mainButtonColor );
					circleD = initCircleD;
					resetCircle( $("#barrier"), imageBarrierD, mainBarrierColor, mainBarrierColor );
					$("#instructions").html( scout );
					base_level++;
					$("#base_debug").html(base_level);
					
				} else if( base_level == 1){
					base_level++;
					$("#barrier").css("background-color", "transparent");
					scoutArea( $("#circle"), initCircleD);
					circleD = initCircleD;
					
				}
			}
			
			counter += 1;
		}
	});
	
});
