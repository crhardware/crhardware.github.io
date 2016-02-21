var React = require('react');
var Styles = require('material-ui/lib/styles');

var IconTextField = React.createClass({
    render: function() {
        var styles = {
            textRoot: {
                paddingRight: 16,
                paddingBottom: 5,
                paddingLeft: 16,
                position: 'relative'
            },
            icon: {
            	position: 'absolute',
            	paddingTop: '5px'
            },
            textTitle: {
                fontSize: 16,
                color: Styles.Colors.darkBlack,
                lineHeight: '36px',
                marginRight: '20px',
                marginLeft: '25px'
            },
            textDesc: {
                fontSize: 13,
                color: Styles.Colors.lightBlack
            }
        };
        return (
			<div style={styles.textRoot}>
				<span style={styles.icon}>{this.props.icon}</span>
				<span style={styles.textTitle}>
					{this.props.textTitle}
				</span>
				<span style={styles.textDesc}>
					{this.props.textDesc}
				</span>
			</div>
        );
    }
});

module.exports = IconTextField;
