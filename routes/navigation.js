/*
 * GET home page
 */

exports.index = function(req, res){
  res.render('index');
};


/*
 * GET Resume page
 */

exports.resume = function(req, res){
 	res.render('resume');
 };