'use strict'

var React = require('react');
var AppRoutes = require('./app-routes');

var App = React.createClass({
    render: function() {
        
        return (
        	<div>
        	{AppRoutes}
        	</div>
        	)
    }
});

module.exports = App;
