
//determines the speed of the game
diamInc = 100;	

function dog(){
	alert("dog");
}

function increaseRadius( circle ){
	var tmpD = circle.height() + diamInc
	circle.css( "height", tmpD);
	circle.css( "width", tmpD );
} 

function decreaseRadius( circle){
	var tmpD = circle.height() - diamInc / 2;
	circle.css( "height", tmpD );
	circle.css( "width", tmpD );
}

function pulse( circle ){
	increaseRadius( circle );
	setTimeout( function(){ decreaseRadius( circle )}, 100 );
}

function resetCircle( circle, initialD ){	
	disable_click = true;
	
	circle.css( "transition", "width 2s, height 2s");
	circle.css( "height", initialD );
	circle.css( "width", initialD );		
	setTimeout( function(){ 
		circle.css( "transition", "initial");
		disable_click = false;
	}, 2000);	
}

function scoutArea( circle, initialD, x, y ){	//reset and move circle
	disable_click = true;
	circle.css( "transition", "width 2s, height 2s, transform 2s");
	circle.css( "height", initialD);
	circle.css( "width", initialD );
	circle.css( "transform", "translate(" + x + "%, " + y + "%)");
	
	setTimeout( function(){ 
		circle.css( "transition", "initial");
		disable_click = false;
	}, 2000);
}

$(document).ready( function(){
	
	
	base = $("#circle");
	barrier = $("#barrier");
	island = $("#island");
	ocean = $("#ocean");
	
	//create first circle and record initial size
	baseD = base.height(); 
	base.css("width", baseD);
	initBaseD = baseD;
	
	//circle needed to be filled to build base
	barrierD = barrier.height();
	barrier.css("width", barrierD );
	imageBarrierD = barrierD / 4;
	
	//the island
	islandD = island.height();
	island.css("width", islandD );
	
	//ocean
	oceanD = ocean.height();
	ocean.css("width", oceanD);
	
	$("#instructions").html( build_base );
	

	//debug info
	counter = 0; //number of clicks
	setInterval(function(){
		baseD = $("#circle").height(); 
		$("#counter").html(counter);
		$("#circleheight").html(baseD);
		$("#barrierheight").html(barrierD);		
		$("#imaginebarrierheight").html(imageBarrierD);
		$("#base_debug").html(base_level);		
	}, 100);
	
	
	
	
	
	
	
});