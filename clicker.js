
$(document).ready(function(){	
	
	var base_level = 0;
	var disable_click = false;
	var diamInc = 100; //the higher the number, the faster the game goes.
	//the original button
	var circleD = $("#circle").height(); //diameter of circle
	var initCircleD = circleD;
	$("#circle").css("width", circleD);
	
	//the base outline
	var barrierD = $("#barrier").height();
	$("#barrier").css("width", barrierD );
	var imageBarrierD = barrierD / 4;
	
	//the island
	var islandD = $("#island").height();
	$("#island").css("width", islandD );
	
	//ocean
	var oceanD = $("#ocean").height();
	$("#ocean").css("width", oceanD);
	
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
	function resetCircle( circle, initialD ){
	//freeze circle
	disable_click = true;
	//alert(initialD);
	circle.css( "transition", "width 2s, height 2s");
	
	circle.css( "height", initialD );
	circle.css( "width", initialD );		
	
	setTimeout( function(){ 
		circle.css( "transition", "initial");
		//unfreeze circle
		disable_click = false;
	}, 2000);	
}

function scoutArea( circle, initialD, x, y ){
	disable_click = true;
	circle.css( "transition", "width 2s, height 2s, transform 2s");
	circle.css( "height", initialD);
	circle.css( "width", initialD );
	circle.css( "transform", "translate(" + x + "%, " + y + "%)");
	
	setTimeout( function(){ 
		circle.css( "transition", "initial");
		//unfreeze circle
		disable_click = false;
	}, 2000);
}

	
	$("#circle").click(function(){
		if( !disable_click && (base_level < 2) ){
			
			increaseRadius( $("#circle") );
			//is this seriously the only way this works?
			setTimeout( function(){ decreaseRadius( $("#circle") )}, 100 );
			//circleD = $("#circle").height();
			
			if( circleD > imageBarrierD ){
				//build base
				if( base_level == 0 ){
					
					resetCircle( $("#circle"), initCircleD );
					circleD = initCircleD;
					resetCircle( $("#barrier"), imageBarrierD );
					$("#instructions").html( scout );
					base_level++;
					
				//scout area
				} else if( base_level == 1){
					
					$("#barrier").css("background-color", "transparent");
					initCircleD = initCircleD / 2;
					scoutArea( $("#circle"), initCircleD, "600", "200" );
					circleD = initCircleD;
					islandD = islandD / 4.5;
					scoutArea( $("#island"), islandD, "-60","-60" );
					
					$("#instructions").html( search );
					base_level++;
					
				}
			} else {
				 
			}
			
			counter += 1;
			
		}
	});

});
