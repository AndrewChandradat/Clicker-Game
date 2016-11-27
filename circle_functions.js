
var disable_click = false;
var diamInc = 100; //the higher the number, the faster the game goes.

function resetCircle( circle, initialD ){
	//freeze circle
	disable_click = true;
	
	circle.css( "transition", "width 2s, height 2s");
	
	circle.css( "height", initialD );
	circle.css( "width", initialD );		
	
	setTimeout( function(){ 
		circle.css( "transition", "initial") 
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
		circle.css( "transition", "initial") 
		//unfreeze circle
		disable_click = false;
	}, 2000);
}


function increaseRadius( circle ){
	circle.css( "height", circle.height() + diamInc );
	circle.css( "width", circle.width() + diamInc );
}

function decreaseRadius( circle ){
	circle.css( "height", circle.height() - (diamInc/2) );
	circle.css( "width", circle.width() - (diamInc/2) );
}