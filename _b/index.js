'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var AppRoutes = require('../src/app-routes');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var createHistory = require('history/lib/createHashHistory');
var injectTapEventPlugin = require('react-tap-event-plugin');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
	<Router
		history={createHistory({queryKey: false})}
	>
		{AppRoutes}
	</Router>
, document.getElementById('app'));
