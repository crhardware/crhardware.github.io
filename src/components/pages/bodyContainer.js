var React = require('react');
var styleResizable = require('material-ui/lib/mixins/style-resizable');

var bodyContainer = React.createClass({
	mixins: [styleResizable],
	render: function(){
		var style = {
			bodyContainer: {
				padding: '30px 0',
				margin: '0 auto',
				width: this.isDeviceSize(styleResizable.statics.Sizes.LARGE) ? '992px' : '100%'
			}
		};
		return (
			<div style={style.bodyContainer}>
				{this.props.children}
			</div>
			);
	}
});

module.exports = bodyContainer;
