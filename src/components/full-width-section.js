'use strict'

var React = require('react');
var ClearFix = require('material-ui/lib/clearfix');
var Styles = require('material-ui/lib/styles');
var DesktopGutter = Styles.Spacing.desktopGutter;
var StylePropable = require('material-ui/lib/mixins').StylePropable;

var FullWidthSection = React.createClass({
	mixins: [StylePropable],
	render: function(){
		var style = this.props.style;
	    var styles = this.getStyles();

		return (
			<ClearFix style={this.mergeAndPrefix(
	          styles.root,
	          style,
	          styles.rootWhenLarge)}>
				{this.props.children}
			</ClearFix>
			);
	},

	getStyles: function() {
		return {
		  root: {
		    padding: DesktopGutter + 'px',
		    boxSizing: 'border-box',
		  },
		  content: {
		    maxWidth: '1200px',
		    margin: '0 auto',
		  },
		  rootWhenSmall: {
		    paddingTop: (DesktopGutter * 2) + 'px',
		    paddingBottom: (DesktopGutter * 2) + 'px',
		  },
		  rootWhenLarge: {
		    paddingTop: (DesktopGutter * 2) + 'px',
		    paddingBottom: (DesktopGutter * 2) + 'px',
		  },
		};
	}
});

module.exports = FullWidthSection;