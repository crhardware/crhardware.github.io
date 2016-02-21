var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var Master = require('./components/master');
var Home = require('./components/pages/home');
var Product = require('./components/pages/product');
var About = require('./components/pages/about');

var AppRoutes = (
		<Route path="/" component={Master}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
			<Route path="product" component={Product} />
			<Route path="about" component={About} />
		</Route>
	);


module.exports = AppRoutes;