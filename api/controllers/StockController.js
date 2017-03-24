/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new' : function(req, res, next){		
		Customer.findOne(req.param('owner'), function(err, customer){
			if(err){
				next(err)
			}
			res.view({
				customer : customer
			})
		});
	},

	create: function(req, res, next){
		Stock.create(req.params.all(), function (err, stock){
		  if (err) { 
		  	return next(err); 
		  }
		   res.redirect("/customer/show/" + stock.owner)
		});
	}

};

