var React = require('react');
var Spacing = require('material-ui').Styles.Spacing;
var StylePropable = require('material-ui').Mixins.StylePropable;

var Body = React.createClass({
	mixins: [StylePropable],
	contextTypes: {
	    muiTheme: React.PropTypes.object
	 },
	render: function(){
		var styles = this._getStyles();
		var style = this.props.style || {};
		return (
				<div style={this.prepareStyles(styles.root, style)}>
					{this.props.children}
				</div>
			);
	},
	_getStyles: function(){
		return {
			root: {
				paddingTop: Spacing.desktopKeylineIncrement + 'px',
				minHeight: [(window.innerHeight && (window.innerHeight - 184) > 300 && (window.innerHeight - 184)) || 497, 'px'].join('')
			}
		}
	}
});

module.exports = Body;