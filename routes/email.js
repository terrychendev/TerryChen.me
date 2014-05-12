var nodemailer = require("nodemailer");


 /*
  * POST Send Email
  */

exports.sendMail = function(req, res){
	// create reusable transport method (opens pool of SMTP connections)
	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: "td00393232@gmail.com",
	        pass: "*************"
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "terrychen@me", // sender address
	    to: "gn02090867@hotmail.com", // list of receivers
	    subject: req.body.subject, // Subject line
	    //text: "Hello world", // plaintext body
	    html: "<div><b>This email is from " + req.body.email + "</b></div><div>" + req.body.body + "</div>" // html body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    var response = {
			"status" : "null",
			"message" : "null"
		};
	    if(error){
	    	response.status = "fail";
	    	response.message = error;
	        res.json(response);
	    }
	    else{
	    	response.status = "success";
	        res.json(response);
	    }
	});
}