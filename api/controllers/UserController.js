/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res, next){
		res.view();
	},

	index: function(req, res, next){
		User.find(function(err, users){
			if(err){
				throw next(err);
			}
			res.view({
				users: users
			})
		})
	},

	create: function(req, res, next){
		User.create(req.params.all(), function(err, user){
			if(err){
				console.log(err)
				res.redirect("/user/new/")
			}
			//res.json({user: user})
			res.redirect("/user/index")
		})
	},

	show: function(req, res){
		User.findOne(req.params.id).exec(function (err, user){
		  if (err) {
		    return next(err);
		  }		 
		  return res.view({
		  	user: user
		  });
		});
	}
};

