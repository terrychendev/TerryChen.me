
function switchRight(ev){
	
	var item = ev.currentTarget.className.split(" ");
	$("div.switchright").css("opacity", "0.2");
	$.each(item, function (index, value){
		if ( index > 0 ){
			$("div.switchright." + value ).css("opacity", "1");
		}
	})
}

function switchAll(ev){

	var item = ev.currentTarget.className.split(" ");
	$("div.switchright").css("opacity", "0.2");
	$("li.switchleft").css("opacity", "0.2");
	$.each(item, function (index, value){
		if ( index > 0 ){
			$("div.switchright." + value ).css("opacity", "1");
			$("li.switchleft." + value ).css("opacity", "1");
		}
	})
}

function returnBack(){

	$("div.switchright").css("opacity", "1");
	$("li.switchleft").css("opacity", "1");
}

$(document).ready(function(){

	$("li.switchleft").hover(switchRight, returnBack);
	$("div.switchright").hover(switchAll, returnBack);
});