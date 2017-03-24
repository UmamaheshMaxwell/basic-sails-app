/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		res.view();
	},

	create: function(req, res, next){
		Customer.create(req.params.all(),function(err, customer){
			if(err){
				next(err);
			}
			res.redirect("/customer/show/" + customer.id)
		})
	},

	show: function(req, res, next){
		Customer.findOne(req.params.id, function(err, customer){
			if(err){
				next(err)
			}
			if(!customer){
				return next();
			}
			res.view({
				customer : customer
			})
		});
	},

	index: function(req, res, next){
		Customer.find(function(err, customers){
			if(err){
				return next(err)
			}
			res.view({
				customers : customers
			})
		})
	},

	edit: function(req, res, next){
		Customer.findOne(req.params.id, function(err, customer){
			if(err){
				next(err)
			}
			if(!customer){
				return next();
			}
			res.view({
				customer : customer
			})
		});
	},

	update: function(req, res, next){
		Customer.update(req.params.id, req.params.all(), function(err, customer){
			if(err){
				return res.redirect("/customer/edit/" + req.params.id)
			}

			res.redirect("/customer/show/"+ req.params.id)
		});
	},

	destroy: function(req, res, next){
		Customer.destroy(req.params.id).exec(function(){
			res.redirect("/customer/")
		})
	}


};

