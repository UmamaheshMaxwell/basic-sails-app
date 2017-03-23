/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new : function(req, res){
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

	show: function(req, res){

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
	}
};

