$(document).ready(function(){		

base_level = 0;
disable_click = false;
game_speed = diamInc;




base.click(function(){
	
switch( base_level ){
	
	case 0:		
		if( !disable_click ){		
			if( base.height() > barrier.height()/4 ){
				disable_click = true;
				
				resetCircle( base, 100 );
				resetCircle( barrier, barrier.height()/4 );
				$("#instructions").html( scout );
				base_level++;
				
				disable_click = false;
			} else {
				pulse( base );
			}
		}

	break;
	
	case 1:
		if( !disable_click ){
			if( base.height() > barrier.height() ){
				disable_click = true;
				
				barrier.css( "background-color", "transparent" );
				initBaseD = initBaseD / 2;
				scoutArea( base, initBaseD, "400", "200" );
				islandD = islandD / 4.5;
				scoutArea( island, islandD, "-60","-60" );
				
				$("#instructions").html( search );
				base_level++;
				
				disable_click = false;
			} else {
				pulse( base );
			}
			
			
		}
	break;
	
	default:
	break;
	
}	
	
	
	
});

});