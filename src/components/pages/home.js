var React = require('react');
var MaterialUi = require('material-ui');

var Styles = MaterialUi.Styles;
var Colors = Styles.Colors;
var Typography = Styles.Typography;

var Mixins = MaterialUi.Mixins;
var StylePropable = Mixins.StylePropable;

var Body = require('./body');
var jsonDatas = require('../../../public/json/home');

var Home = React.createClass({
	mixins: [StylePropable],
    render: function() {
        var styles = {
            root: {
                backgroundColor: Colors.cyan500,
                overflow: 'hidden'
            },
            logo: {
                marginLeft: (window.innerWidth * 0.5) - 143 + 'px',
                width: 285
            },
            tagline: {
                margin: '32px auto 0 auto',
                textAlign: 'center',
                maxWidth: 575
            },
            h1: {
            	fontSize: 56,
                color: Colors.darkWhite,
                fontWeight: Typography.fontWeightLight
            },
            h2: {
                fontSize: 24,
                lineHeight: '32px',
                paddingTop: 16,
                marginBottom: 12,
                letterSpacing: 0,
                color: Colors.darkWhite,
                fontWeight: Typography.fontWeightLight
            }
        },
            jsonData = jsonDatas[this.props.lang];
        return (
        	<Body style={styles.root}>
				<img src={jsonData.logo} style={styles.logo} />
				<div style={styles.tagline} >
					<h1 style={styles.h1}>{jsonData.title}</h1>
					<h2 style={styles.h2} dangerouslySetInnerHTML={{__html: jsonData.desc}}></h2>
				</div>
			</Body>
        )
    }
});

module.exports = Home;
