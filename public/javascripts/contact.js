$(document).ready(function(){
	$("button.sendMail").on('click', sendMail);
	$(".fa-skype").on('click', showSkype);
});

function sendMail(){

	//Introducing Loading Icon
	$("button.sendMail").html("<i class='fa fa-spinner fa-spin'></i>");

	var data = {
		"subject" : $("input[name='subject']").val(),
		"email" : $("input[name='email']").val(),
		"body" : $("textarea[name='body']").val()
	};

	$.ajax({
		url : '/sendMail',
		type : 'POST',
		dataType: 'JSON',
		data : data,
		success : function( res ){
			if(res.status == 'success'){
				$("button.sendMail").html('<i class="fa fa-check-circle-o"></i>');
				$("button.sendMail").attr('disabled', 'disabled');
				$(".title").html("Thank you! Will get back to you asap")
			}
			else if(res.status == 'fail'){
				$(".title").html('server error, please try again later');
			}
		},
		error : function( dd, ddw, err ){
			$(".title").html('server error, please try again later');
		}
	});
}

function showSkype(){

	$(".skype").append('<i class="fa fa-angle-right"></i> &nbspgn02090867');

}