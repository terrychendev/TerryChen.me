$(document).ready(function(){
	$(".fa-skype").on('click', showSkype);
});

function showSkype(){
	$(".skype").append('<i class="fa fa-angle-right"></i> &nbspgn02090867');
	$(".fa-skype").on('click', removeSkype);
}

function removeSkype(){
	$(".skype").html('');
	$(".fa-skype").on('click', showSkype);
}