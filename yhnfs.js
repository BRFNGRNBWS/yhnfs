/*
TEMPLATE
* 
INDENT CORRECTLY PLZ OR I WILL BE LIKE MAD AND STUFF
*

interval = setInterval(function(){
	if(click == 1){
		setprompt("");
		sets("", "", "");
	}else if(click == 2){
		setprompt("");
		sets("", "", "");
	}else if(click == 3){
		setprompt("");
		sets("", "", "");
	}
}, 100);

* 
*/
 
var click = 0;
var torf = false;
var interval;

function clicked(num){
	click = num;
}

function setprompt(p){
	$("#prompt").text(p);
	clearInterval(interval);
}

function sets(o, tw, th){
	$("#1").text(o);
	$("#2").text(tw);
	$("#3").text(th);
}

//THIS IS THE THING TO EDIT FOR THE STUFF
function start(){
	setprompt("You decide that you have no friends, and that your loneliness is driving you insane. You need friends.");
	sets("Roam the streets", "Get on Facebook", "Head on down to McDonalds");
	interval = setInterval(function(){
		if(click == 1){
			interval = setInterval(function(){
				setprompt("You walk down the stairs of your dirty and run down apartment building, suddenly worried about your grave undertaking. You haven't talked to real people in months, years, even. What if you found no friends? What if nobody wanted to talk to you?");
				sets("Turn back, this is too scary", "Steady on!", "");
				if(click == 1){
				
				}else if(click == 2){
				
				}
			}, 100);
		}else if(click == 2){
			
		}else if(click == 3){
	
		}
	}, 100);
}
