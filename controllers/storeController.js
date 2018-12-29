// importing mongoose to interact with database
const mongoose =require('mongoose');

// referencing model using mongoose singleton 
const Store = mongoose.model('Store');
// creating a homePage controller
exports.homePage = (req,res)=>{
	res.render('index',{title: 'Dang That\'s Delicious '});
}

exports.addStore = (req,res)=>{
	res.render('editStore',{title: 'Add Store'});
}




//===========submitting form data
exports.createStore = async (req,res)=>{
	const store = await (new Store(req.body)).save(); // creating new store instance
	
 //========= creating a flash message for the user
	req.flash('success',`Successfully Created ${store.name}. Care to leave a review?`); //using Es6 back ticks 
	res.redirect(`/store/${store.slug}`);
}	