
// creating middle ware
exports.myMiddleware = (req,res,next)=>{
	req.name = 'Wes';
	// setting up cookies
	// res.cookie('name','wes is cool',{ maxAge: 9000000});
	next();
}
// creating a homePage controller
exports.homePage = (req,res)=>{
	res.render(index);
}