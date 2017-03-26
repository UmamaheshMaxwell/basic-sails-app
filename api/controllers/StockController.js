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
	},

	show: function(req, res, next){
		Stock.findOne(req.params.id).exec(function (err, stock){
			if (err) {
				return next(err);
			}
			res.view({
				stock : stock
			});
		});
	},

	edit: function(req, res, next){
		Stock.findOne(req.params.id).exec(function (err, stock){
			if (err) {
				return next(err);
			}
			res.view({
				stock : stock
			});
		});
	},

	update: function(req, res, next){   
		Stock.update(req.params.id, req.params.all()).exec(function(err, stock){
		  if (err) {
		    res.redirect("/stock/edit/" + req.params.id)
		  }
		  res.redirect("/customer/show/" + stock[0].owner)		  
		});
	},

	destroy: function(req, res, next){
		Stock.destroy(req.params.id).exec(function (err, stock){
		  if (err) { 
		  	return next(err); 
		  }		  
		  res.redirect("/customer/show/" + stock[0].owner)
		});
	}
};

