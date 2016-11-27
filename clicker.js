
$(document).ready(function(){	
	
	var base_level = 0;
	
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
	
	
	$("#circle").click(function(){
		if( !disable_click && base_level < 2){
			increaseRadius( $("#circle") );
			//is this seriously the only way this works?
			setTimeout( function(){ decreaseRadius( $("#circle") )}, 100 );
			
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
					
					$("#instructions").html( scout );
					base_level++;
					disable_click = true;
				}
			} else {
				circleD = $("#circle").height() 
			}
			
			counter += 1;
		}
	});

});
