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
		disableClick = true;
		
		circle.css( "transition", "width 2s, height 2s");
		circle.css( "height", initialD);
		circle.css( "width", initialD );		
		
		setTimeout( function(){ 
			circle.css( "transition", "initial") 
			//unfreeze circle
			disableClick = false;
		}, 2000);	
	}
	
	function scoutArea( circle, initialD, x, y ){
		disableClick = true;
		circle.css( "transition", "width 2s, height 2s, transform 2s");
		circle.css( "height", initialD);
		circle.css( "width", initialD );
		circle.css( "transform", "translate(" + x + "%, " + y + "%)");
		
		setTimeout( function(){ 
			circle.css( "transition", "initial") 
			//unfreeze circle
			disableClick = false;
		}, 2000);
	}