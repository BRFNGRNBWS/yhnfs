click = 0;
torf = false;
waits = null;

function set(p, o, tw, th){
	$("#prompt").text(p);
	$("#1").text(o);
	$("#2").text(tw);
	$("#3").text(th);
	waits = setTimeout(function(){}, 999999999999999999999999999999999999999999);
}


function start(){
	set("You decide that you have no friends, and that your loneliness is driving you insane. You need friends.", "Roam the streets", "Get on Facebook", "Head on down to McDonalds");
	if(click == 1){
			set("You walk down the stairs of your dirty and run down apartment building, suddenly worried about your grave undertaking. You haven't talked to real people in months, <i>years,</i> even. What if you found no friends? What if nobody wanted to talk to you?", "Turn back, this is too scary", "Steady on, lad!", "");
			if(click == 1){
			
			}else if(click == 2){
				
			}
	}else if(click == 2){
	
	}else if(click == 3){
	
	}
}
