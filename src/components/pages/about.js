var React = require('react');
var Body = require('./body');
var BodyContainer = require('./bodyContainer');
var AboutContent = require('./about/aboutContent');

var jsonDatas = require('../../../public/json/about');

var About = React.createClass({
	render: function(){
		var jsonData = jsonDatas[this.props.lang];
		return (
				<Body>
					<BodyContainer>
						<AboutContent jsonData={jsonData}/>
					</BodyContainer>
				</Body>
			)
	}
});

module.exports = About;